const fs = require('fs');
function assert(condition, msg) {
    if (!condition) {
        throw new Error(msg);
    }
}

const required = name => {
    throw new Error(`missing required param ${name}`);
}

const score = (idx, val) => {
    return {
        level: idx,
        value: val
    };
}

exports.NRS_SD = {
    NoticableNegativity: v => {
        assert(v >= 1 && v <= 2, `Invalid score for NoticableNegativity (${v})`);
        return _ => score(0, v);
    },
    AppreciableNegativity: v => {
        assert(v >= 4 && v <= 5, `Invalid score for AppreciableNegativity (${v})`);
        return _ => score(1, v);
    },
    PADS: pads => score(2, 5 + Math.min(4, 0.8 * pads)),
    Cried: pads => score(3, 6 + Math.min(4, 0.8 * pads))
};

exports.NRS_JH = {
    NoticableHype: v => {
        assert(v >= 1 && v <= 2, `Invalid score for NoticableHype (${v})`);
        return _ => score(0, v);
    },
    PADS: pads => score(1, (5 + Math.min(4, 0.8 * pads)) * 7 / 5),
    Cried: pads => score(2, (6 + Math.min(4, 0.8 * pads)) * 7 / 5)
};

exports.NRS_CH = {
    NoticableComfiness: v => {
        assert(v >= 1 && v <= 2, `Invalid score for NoticableComfiness (${v})`);
        return _ => score(0, v);
    },
    PADS: pads => score(1, (5 + Math.min(4, 0.8 * pads)) * 7 / 3),
    Cried: pads => score(2, (6 + Math.min(4, 0.8 * pads)) * 7 / 3)
};

exports.NRS_HR = {
    SuccessfulJumpscare: score(0, 6),
    CausedSleeplessNight: score(1, 10)
};

exports.NRS_ED = {
    InspirePolitics: score(0, 7),
    InterestKnownField: score(1, 8),
    InterestNewField: score(2, 10)
};

exports.NRS_BR = {
    Dropped: score(0, 2),
    OnHold: score(1, 6),
    KindaBoring: v => {
        assert(v >= 6 && v <= 8, `Invalid score for KindaBoring (${v})`);
        return score(2, v);
    },
    Completed: score(3, 10),
    Other: score(4, 5)
};

exports.NRS_CM = {
    Bad: score(0, -5),
    Neutral: score(1, 0),
    Good: score(2, 10)
};

exports.NRS_MEME = {
    MLessThanADay: score(0, 0),
    M1_3Days: score(1, 1),
    M4_7Days: score(2, 3),
    M1_2Weeks: score(3, 5),
    M2_3Weeks: score(4, 6),
    M3Weeks_1Month: score(5, 7),
    M1_2Months: score(6, 8),
    M2_3Months: score(7, 9),
    MMoreThan3Months: score(8, 10),
};

exports.Impacts = {
    Sad: 0,
    Hype: 1,
    Comfy: 2,
    Educational: 3,
    Horror: 4,
    Love: 5
};

function findImpact(standard, level) {
    for (i of Object.values(standard)) {
        if (i.level == level) {
            return i;
        }
    }

    return null;
}

function combine(arr, factor) {
    let sorted = [...arr].sort((a, b) => a - b);
    let result = 0;
    for (let i = 0; i < sorted.length; i++) {
        result = result * factor + sorted[i];
    }
    return result;
}


function toEntry({
    id = required("id"),
    title = required("title"),
    type = "Anime",
    status = "Completed",
    seasonal = false,
    impacts = [],
    community = exports.NRS_CM.Neutral,
    boredom = exports.NRS_BR.Completed,
    meme = {
        duration: exports.NRS_MEME.MLessThanADay,
        strength: 0
    },
    music = 0,
    specials = [],
    additionals = []
}) {
    function padsStuff(type) {
        return impacts.filter(i => i.type == type)
            .map(i => {
                let s = i.score(i.pads || 0);
                return {
                    standard_level: s.level,
                    pads: i.pads || 0,
                    value: s.value
                };
            });
    }

    function noPadsStuff(type) {
        return impacts.filter(i => i.type == type)
            .map(i => {
                let score = i.score;
                return {
                    standard_level: score.level,
                    value: score.value
                };
            });
    }

    function value(arr, factor = 0.2) {
        return combine(arr.map(x => x.value), factor);
    }

    let sadImpacts = padsStuff(exports.Impacts.Sad);
    let hypeImpacts = padsStuff(exports.Impacts.Hype);
    let comfyImpacts = padsStuff(exports.Impacts.Comfy);
    let educationImpacts = noPadsStuff(exports.Impacts.Educational);
    let horrorImpacts = noPadsStuff(exports.Impacts.Horror);
    let lovedChars = impacts.filter(i => i.type == exports.Impacts.Love)
        .map(i => {
            function date(str) {
                return str.length == 0 ? new Date() : new Date(str);
            }
            function waifu(x) {
                // return 10 * Math.tanh(x / 60);
                return Math.min(10, x / 6 - x * x * x / 64800 + x * x * x * x * x / 583200000);
            }
            let days = i.periods
                .map(p => (date(p.to) - date(p.from)) / 86400000)
                .reduce((a, b) => a + b, 0)
            return {
                influential_periods: i.periods.map(p => { return { ...p }; }),
                influential_days: days,
                value: waifu(days)
            };
        });

    let ret = {
        id, title, type, status, seasonal,
        score: {
            emotion: {
                sad: {
                    impacts: sadImpacts,
                    value: value(sadImpacts)
                },
                hype: {
                    impacts: hypeImpacts,
                    value: value(hypeImpacts)
                },
                comfy: {
                    impacts: comfyImpacts,
                    value: value(comfyImpacts)
                },
                love: {
                    chars: lovedChars,
                    value: value(lovedChars)
                },
                humor: {
                    value: 0
                },
                thriller: {
                    value: 0
                },
                education: {
                    impacts: educationImpacts,
                    value: value(educationImpacts)
                },
                horror: {
                    impacts: horrorImpacts,
                    value: value(horrorImpacts)
                },
                community: {
                    standard_level: community.level,
                    value: community.value
                },
                boredom: {
                    standard_level: boredom.level,
                    value: boredom.value
                },
                special_emotions: {
                    scores: specials,
                    value: specials.reduce((a, b) => a + b, 0)
                }
            },
            meme: {
                duration_standard_level: meme.duration.level,
                strength: meme.strength,
                killed_by: meme.killed_by || [],
                value: 0
            },
            music: {
                value: music
            },
            additional: {
                scores: additionals,
                value: additionals.reduce((a, b) => a + b, 0)
            },
            value: 0
        }
    };

    ret.score.emotion.value =
        ret.score.emotion.sad.value * 0.7 +
        ret.score.emotion.hype.value * 0.5 +
        ret.score.emotion.comfy.value * 0.3 +
        ret.score.emotion.love.value * 0.2 +
        ret.score.emotion.humor.value * 0.2 +
        ret.score.emotion.thriller.value * 0.4 +
        ret.score.emotion.education.value * 0.1 +
        ret.score.emotion.horror.value * 0.05 +
        ret.score.emotion.community.value * 0.05 +
        ret.score.emotion.boredom.value * 0.3 +
        ret.score.emotion.special_emotions.value;

    return ret;
}

exports.combine = function ({
    title = required("title"),
    from = required("from"),
    additional_nerf = undefined
}) {
    return {
        title,
        combine: true,
        combine_from: from,
        additional_nerf
    };
}

exports.output = entries => {
    let content = {
        last_updated: new Date().toISOString(),
        entries: Object.entries(entries).map(([id, entry]) => {
            if (entry.combine) {
                return {
                    ...entry,
                    id: id
                };
            } else {
                try {
                    return toEntry({
                        ...entry,
                        id: id
                    });
                } catch (err) {
                    console.error(`error on entry: ${entry.title} (id: ${id}):`);
                    console.error(err);
                }
            }
        })
    };

    function makeCombine(entry) {
        if (!entry.combine) {
            return;
        }

        let copy = { ...entry };
        let froms = copy.combine_from.flatMap(id => {
            let find = entries[id];
            if (find) makeCombine(find);
            return find ? [find] : [];
        });
        function rawMeme(meme) {
            return meme? meme.duration.value * 0.9 + meme.strength * 0.1 : 0;
        }
        function clear(obj) {
            for (var prop in obj) { if (obj.hasOwnProperty(prop)) { delete obj[prop]; } }
        }
        let from_memes = froms.map(e => e.meme || {
            duration: exports.NRS_MEME.MLessThanADay,
            strength: 0
        })
        let meme = { ...from_memes.reduce((m1, m2) => rawMeme(m1) > rawMeme(m2) ? m1 : m2) };
        meme.killed_by = [...new Set(from_memes.flatMap(e => e.killed_by || []))];
        clear(entry);

        let music_combine_factor = 0.2;

        let boredoms = froms.flatMap(e => e.boredom || exports.NRS_BR.Completed)
            .filter(br => br != exports.NRS_BR.Other);

        let boredom = boredoms.length > 0? 
            boredoms.reduce((c1, c2) => c1.value > c2.value ? c2 : c1) : exports.NRS_BR.Other;

        Object.assign(entry, toEntry({
            id: copy.id,
            title: copy.title,
            type: "Franchise",
            status: "Non-watchable",
            seasonal: false,
            impacts: froms.flatMap(e => e.impacts || []),
            community: froms.flatMap(e => e.community || exports.NRS_CM.Neutral).reduce((c1, c2) => Math.abs(c1.value) > Math.abs(c2.value) ? c1 : c2),
            boredom,
            meme,
            music: combine(froms.map(e => e.music || 0), music_combine_factor),
            specials: froms.flatMap(e => e.specials || []),
            additionals: copy.additional_nerf || froms.flatMap(e => e.additionals || [])
        }));
    }

    content.entries.forEach(makeCombine);

    // meme compensation
    function calcMeme(entry) {
        let meme = entry.score.meme;
        let compensation = 0;
        for (killer of meme.killed_by) {
            let match = content.entries.find(p => p.id == killer);
            if (match) {
                compensation += calcMeme(match) * 0.1;
            }
        }
        return meme.strength * 0.1 + findImpact(exports.NRS_MEME, meme.duration_standard_level).value * 0.9 + compensation;
    }
    content.entries.forEach(e => e.score.meme.value = calcMeme(e));
    content.entries.forEach(e => {
        e.score.value = e.score.emotion.value * 0.85 + e.score.meme.value * 0.15 + e.score.music.value * 0.05 + e.score.additional.value;
    });

    fs.writeFileSync("impl/nrs.json", JSON.stringify(content, null, 4));
};

exports.empty_killed_by = function (...id) {
    return {
        strength: 0,
        duration: exports.NRS_MEME.MLessThanADay,
        killed_by: id
    }
}