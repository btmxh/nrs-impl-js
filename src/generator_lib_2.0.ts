import { writeFileSync } from "fs";

class NRSEntry {
    id: string;
    title: string;
    type: NRSEntryType;
    status: NRSEntryStatus;
    seasonal: boolean;
    score: NRSEntryScore;

    private_flags: NRSEntryPrivateFlags;

    constructor(id: string, title: string,
                type = NRSEntryType.Anime,
                status = NRSEntryStatus.Completed,
                seasonal = false) {
        this.id = id;
        this.title = title;
        this.type = type;
        this.status = status;
        this.seasonal = seasonal;
        this.score = new NRSEntryScore();
        this.private_flags = new NRSEntryPrivateFlags();
    }
};

class NRSEntryPrivateFlags {
    calc_impact = false;
    calc_relation = false;
    calc_overall = false;
}

class NRSEntryScore {
    impact: NRSImpactScore;
    relation: NRSRelationScore;
    overall: number;

    constructor() {
        this.impact = new NRSImpactScore();
        this.relation = new NRSRelationScore();
        this.overall = 0.0;
    }
}

class NRSImpactScore {
    impacts: NRSImpact[] = [];
    subscores = new Map<string, NRSSubscoreValue>();
    value: number = 0.0;
};

class NRSRelationScore {
    relations: NRSRelation[] = [];
    value: number = 0.0;
};

class NRSFactorScoreValues {
    subscores = new Map<string, Map<string, number>>();
};

interface NRSImpact {
    description: string;
    score: NRSFactorScoreValues;
};

interface NRSRelation {
    id: string;
    description: string;
    relation_weight: number;
    value: number;
};

class NRSSubscore {
    id: string;
    name: string;
    combine_weight: number;
    factors: NRSFactorScore[];

    constructor(id: string, name: string, combine_weight: number = 1.0, factors: NRSFactorScore[] = []) {
        this.id = id;
        this.name = name;
        this.combine_weight = combine_weight;
        
        if(factors.length == 0) {
            factors = [ new NRSFactorScore(id + "-" + id, name.replace(' Subscore', ''), 1.0) ];
        }

        this.factors = factors;
    }
};

class NRSFactorScore {
    id: string;
    name: string;
    combine_weight: number;

    constructor(id: string, name: string, combine_weight: number) {
        this.id = id;
        this.name = name;
        this.combine_weight = combine_weight;
    }
};

class NRSSubscoreValue {
    factorScores: Map<string, number>;
    value: number;

    constructor() {
        this.factorScores = new Map<string, number>();
        this.value = 0.0;
    }
}

enum NRSEntryType {
    Anime = "Anime",
    Manga = "Manga",
    LightNovel = "Light Novel",
    VisualNovel = "Visual Novel",
    Game = "Game",
    Franchise = "Franchise",
    Music = "Music",
    Other = "Other"
};

enum NRSEntryStatus {
    Completed = "Completed",
    Watching = "Watching",
    Other = "Other"
};

interface RelationCallback {
    getEntry(id: string): NRSEntry | null;
};

function combine(arr: number[], weight: number) {
    function combine_unsigned(uarr: number[], weight: number) {
        let sorted = [...uarr].sort((a, b) => a - b);
        let result = 0;
        for (let i = 0; i < sorted.length; i++) {
            result = result * weight + sorted[i];
        }
        return result;
    }

    const pos = arr.filter(x => x > 0);
    const neg_abs = arr.filter(x => x < 0).map(x => -x);

    return combine_unsigned(pos, weight) - combine_unsigned(neg_abs, weight);
}

const subscores = [
    new NRSSubscore("Emotion", "Emotion Subscore", 0.8, [
        new NRSFactorScore("Emotion-ActivatedUnpleasant", "Activated Unpleasant", 0.8),
        new NRSFactorScore("Emotion-ActivatedPleasant", "Activated Pleasant", 0.85),
        new NRSFactorScore("Emotion-ModerateUnpleasant", "Moderate Unpleasant", 0.85),
        new NRSFactorScore("Emotion-ModeratePleasant", "Moderate Pleasant", 0.9),
        new NRSFactorScore("Emotion-CalmingUnpleasant", "Calming Unpleasant", 0.9),
        new NRSFactorScore("Emotion-CalmingPleasant", "Calming Pleasant", 0.95)
    ]),

    new NRSSubscore("Art", "Art Subscore", 0.7, [
        new NRSFactorScore("Art-Language", "Language", 0.7),
        new NRSFactorScore("Art-Illustration", "Illustration", 0.5),
        new NRSFactorScore("Art-Music", "Music", 0.95)
    ]),

    new NRSSubscore("Information", "Information Subscore", 1.0, [
        new NRSFactorScore("Information-Politics", "Politics", 0.85),
        new NRSFactorScore("Information-GeneralInformation", "General Information", 0.9),
    ]),

    new NRSSubscore("Boredom", "Boredom Subscore"),
    new NRSSubscore("Fandom", "Fandom Subscore"),
    new NRSSubscore("Additional", "Additional Subscore"),
];

function calcImpactImpl(entryImpactScore: NRSImpactScore) {
    entryImpactScore.subscores = new Map<string, NRSSubscoreValue>();

    for(const subscore of subscores) {
        const entrySubscore = new NRSSubscoreValue();
        entryImpactScore.subscores.set(subscore.id, entrySubscore);

        const factorScoreValues: number[] = [];

        for(const factorScore of subscore.factors) {
            const impactScores = entryImpactScore.impacts
                .map(impact => impact.score.subscores.get(subscore.id)?.get(factorScore.id))
                .filter((score): score is number => !!score);
            const factorScoreValue = combine(impactScores, factorScore.combine_weight);

            entrySubscore.factorScores.set(factorScore.id, factorScoreValue);
            factorScoreValues.push(factorScoreValue);
        }

        entrySubscore.value = combine(factorScoreValues, subscore.combine_weight);
        entryImpactScore.value += entrySubscore.value;
    }
}

function calcEntryImpact(entry: NRSEntry) {
    calcImpactImpl(entry.score.impact);
    entry.private_flags.calc_impact = true;
}

function calcEntryRelation(entry: NRSEntry, callback: RelationCallback) {
    function cloneMap(map: Map<string, NRSEntry>) {
        const clone = new Map<string, NRSEntry>();
        map.forEach((v, k) => clone.set(k, v));
        return clone;
    }

    function calcRelation(relation: NRSRelation, cache: Map<string, NRSEntry>): number {
        const entry = callback.getEntry(relation.id);
        return entry? calcEntryRelationInternal(entry, cache) * relation.relation_weight : 0.0;
    }

    function calcEntryRelationInternal(entry: NRSEntry, cache: Map<string, NRSEntry>) {
        if(entry.private_flags.calc_overall) {
            return entry.score.overall;
        } else if(entry.private_flags.calc_relation) {
            calcEntryOverall(entry);
            return entry.score.overall;
        }

        if(cache.has(entry.id)) {
            return entry.score.impact.value;
        }

        cache = cloneMap(cache);
        cache.set(entry.id, entry);

        if(!entry.private_flags.calc_impact) {
            calcEntryImpact(entry);
        }

        let relationScore = 0.0;
        for(let relation of entry.score.relation.relations) {
            relationScore += calcRelation(relation, cache);
        }

        return relationScore;
    }

    entry.score.relation.value = calcEntryRelationInternal(entry, new Map<string, NRSEntry>());
    entry.private_flags.calc_relation = true;
}

function calcEntryOverall(entry: NRSEntry) {
    entry.score.overall = entry.score.impact.value + entry.score.relation.value;
    entry.private_flags.calc_overall = true;
}

function calc(entry: NRSEntry, callback: RelationCallback) {
    calcEntryImpact(entry);
    calcEntryRelation(entry, callback);
    calcEntryOverall(entry);
}

// DSL
interface DSLEntry {
    id: string;
    title: string;

    type?: NRSEntryType;
    status?: NRSEntryStatus;
    seasonal?: boolean;

    impacts?: NRSImpact[];
    relations?: NRSRelation[];
};

export function impactEx(scores: { id: string, value: number }[], desc: string = "", meta: object = {}): NRSImpact {
    const impact: any = {};

    impact.description = desc;
    impact.score = new NRSFactorScoreValues();
    for(const subscore of subscores) {
        const subscoreValue = new Map<string, number>();

        for(const factorScore of subscore.factors) {
            let value = 0.0;
            for(const score of scores) {
                if(score.id == factorScore.id) {
                    value = score.value;
                }
            }
            subscoreValue.set(factorScore.id, value);
        }

        impact.score.subscores.set(subscore.id, subscoreValue);
    }

    Object.assign(impact, meta);

    return impact as NRSImpact;
}

export function MAL(malID: number): string {
    return "A-MAL-" + malID;
}

export function relation(id: string, weight: number, desc: string = ""): NRSRelation {
    const relation: NRSRelation = {
        id: id,
        relation_weight: weight,
        description: desc,
        value: 0.0
    };
    return relation;
}

export function impact(id: string, value: number, desc: string = "", meta: object = {}): NRSImpact {
    return impactEx(
        [ { id: id, value: value } ],
        desc, meta
    );
}

export function nrsError(err: string) {
    throw new Error(err);
}

export function PADS(duration: number, emotionId: string): NRSImpact {
    const meta = { padsLength: duration };
    if(duration < 1) {
        nrsError("not long enough to cause a PADS");
    }

    if(duration > 5) {
        duration = 5;
    }

    const factor = (duration - 1) / 4;
    const score = factor * 2 + 3;

    return impact(emotionId, score, "PADS", meta);
}

export function Cry(emotionId: string): NRSImpact {
    return impact(emotionId, 6, "Cry");
}

export function EI(from: number, to: number, name: string, score: number,
            emotionId: string, scale: (emotion: string) => number): NRSImpact {
    if(score < from || score > to) {
        nrsError(name + " score out of range");
    }

    if(emotionId == Emotions.AP || emotionId == Emotions.MU) {
        nrsError(name + " not applicable to " + emotionId);
    }

    return impact(emotionId, score * scale(emotionId), name);
}

export function AEI(score: number, emotionId: string): NRSImpact {
    return EI(2, 3, "AEI", score, emotionId, id => {
        switch(id) {
            case Emotions.AU: return 0.3;
            case Emotions.MP: return 0.9;
            default: return 1.0;
        }
    });
}

export function NEI(score: number, emotionId: string): NRSImpact {
    return EI(1, 2, "NEI", score, emotionId, id => {
        switch(id) {
            case Emotions.AU: return 0.2;
            case Emotions.MP: return 0.9;
            default: return 1.0;
        }
    });
}

export function WaifuEx(name: string, periods: {from: string, to: string}[]): NRSImpact {
    const days = periods.map(({from, to}) => {
        function date(str: string): number {
            return str.length == 0 ? 0 : new Date(str).getTime();
        }
        return Math.max(0, (date(to) - date(from)) / 86400000);
    }).reduce((a, b) => a + b);
    return impact(Emotions.MP, 1.5 * Math.tanh(days / 60), "Waifu",
        { waifu_name: name, influential_days: days, influential_periods: periods });
}

export function Waifu(name: string, from: string, to: string): NRSImpact {
    return WaifuEx(name, [ {from: from, to: to} ]);
}

export function WaifuUnknown(name: string, influentialDays: number): NRSImpact {
    return impact(Emotions.MP, 1.5 * Math.tanh(influentialDays / 60), "Waifu",
        { waifu_name: name, influential_days: influentialDays });
}

export function Humor(value: number) {
    if(value < 1 || value > 4) {
        nrsError("humor score out of bounds");
    }
    return impact(Emotions.AP, value, "Humor");
}

export function Plot(value: number) {
    if(value < 1 || value > 5) {
        nrsError("plot score out of bounds");
    }
    return impact(Emotions.AP, value, "Plot");
}

export function Jumpscare() {
    return impact(Emotions.MU, 1, "Successful Jumpscare");
}

// Horror only
export function SleeplessNight() {
    return impact(Emotions.MU, 4, "Sleepless Night");
}

export function Info(infoType: InfoType) {
    return impact(infoType == InfoType.Politics? 
        "Information-Politics" : "Information-GeneralInformation", 4, infoType);
}

export enum InfoType {
    Politics = "Politics",
    KnownField = "Made me interested in a known field",
    NewField = "Made me interested in a new field"
}

export function Boredom(level: Level) {
    return impact("Boredom-Boredom", level.score, level.name);
}

export const Emotions = {
    AU: "Emotion-ActivatedUnpleasant",
    AP: "Emotion-ActivatedPleasant",
    MU: "Emotion-ModerateUnpleasant",
    MP: "Emotion-ModeratePleasant",
    CU: "Emotion-CalmingUnpleasant",
    CP: "Emotion-CalmingPleasant"
};

export interface Level {
    name: string;
    score: number;
}

function level(name: string, score: number): Level {
    return {name: name, score: score};
}

export const BoredomLevel = {
    Completed: level("Completed", 1),
    CompletedWithNoticeableBoredom: level("Completed with noticeable boredom", 0.5),
    Dropped: level("Dropped", -1),
    Unwatched: level("Unwatched", 0),
    Watching: level("Watching", 0.75),
    TempOnHold: level("Temporarily On-Hold", -0.5),
    PartiallyDropped: function(value: number) { return { name: "Partially dropped", value: value }; }
};

export const MemeLevel = {
    MLessThanADay: level("Less than a day", 0),
    M1_3Days: level("1-3 Days", 0.1),
    M4_7Days: level("4-7 Days", 0.3),
    M1_2Weeks: level("1-2 Weeks", 0.5),
    M2_3Weeks: level("2-3 Weeks", 0.6),
    M3Weeks_1Month: level("3 Weeks - 1 Month", 0.7),
    M1_2Months: level("1-2 Months", 0.8),
    M2_3Months: level("2-3 Months", 0.9),
    MMoreThan3Months: level("More than 3 months", 1)
}

export function Meme(duration: Level, strength: number) {
    return impact(Emotions.AP, strength * duration.score * 3, "Meme",
        {
            meme_duration: duration.name,
            meme_strength: strength
        }
    );
}

export function KilledMeme(id: string) {
    return relation(id, 1e-2, "Killed Meme");
}

export function GateOpen(id: string) {
    return relation(id, 1e-4, "Gate Open");
}

export function Revive(id: string) {
    return relation(id, 0.5e-4, "Revive");
}

export function FeatureMusic(id: string) {
    return relation(id, 1e-2, "Feature Music");
}

export function generate(entries: DSLEntry[]) {
    for(let entry of entries) {
        if(!entry.type) {
            entry.type = (() => { switch(entry.id.charAt(0)) {
                case 'A': return NRSEntryType.Anime;
                case 'L': return NRSEntryType.LightNovel;
                case 'V': return NRSEntryType.VisualNovel;
                case 'G': return NRSEntryType.Game;
                case 'F': return NRSEntryType.Franchise;
                case 'M': return NRSEntryType.Music;
            } })();
        }
        entry.status = entry.status || NRSEntryStatus.Completed;
        entry.seasonal = entry.seasonal || false;
        entry.relations = entry.relations || [];
        entry.impacts = entry.impacts || [];
    }

    const nrsEntries = entries.map(dslEntry => {
        const nrsEntry = new NRSEntry(
            dslEntry.id,
            dslEntry.title,
            dslEntry.type || NRSEntryType.Anime,
            dslEntry.status || NRSEntryStatus.Completed,
            dslEntry.seasonal || false);


        dslEntry.relations = dslEntry.relations || [];
        dslEntry.impacts = dslEntry.impacts || [];

        nrsEntry.score.impact.impacts = dslEntry.impacts;
        nrsEntry.score.relation.relations = dslEntry.relations;

        return nrsEntry;
    });

    const callback: RelationCallback = {
        getEntry: (id: string) => {
            const filtered = nrsEntries.filter(entry => entry.id == id);
            if(filtered.length > 0) {
                return filtered[0];
            } else {
                return null;
            }
        }
    }

    for(let entry of nrsEntries) {
        calc(entry, callback);
    }

    const out = {
        lastUpdated: new Date().toISOString(),
        entries: nrsEntries
    };

    writeFileSync("impl/nrs_2.0.json", JSON.stringify(out, (key, value) => {
        if(key == "private_flags") {
            return undefined;
        } else if(value instanceof Map) {
            let obj: any = {};
            value.forEach((v, k) => {
                obj[k] = v;
            });
            return obj;
        } else {
            return value;
        }
    }, 2));
}