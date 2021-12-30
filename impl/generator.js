const {
    Impacts, output, empty_killed_by, combine,
    NRS_BR, NRS_CH, NRS_CM, NRS_ED,
    NRS_HR, NRS_JH, NRS_MEME, NRS_SD
} = require("../src/generator_lib");

// Main part

// YuYuYu has a lot of entries in NRS2 (just too based bro)
// They all share the meme object
const YuYuYuMeme = () => {
    return {
        /*
        YuYuYu is pretty lucky to be watched in such an era where memes are absent,
        I have to watch shitposts from YouTube for content, Magireco and Love Live
        is pretty much dead, other seasonal animes are ganbare douki (one room 
        duration = no memes), selection project (generic idol = no memes), battery
        mecha thing (no memes), assasin isekai (hoantinh memes are milked from the
        previous season, so little memes), mieruko (no memes).
        Hence, they are able to achieve a monopoly, starting from Oct 22, 2021, and
        it's continuing to this day (it has only been 8 days bruh).
        sonoko Nogizaka46
        idsuke can't fc ror hr
        */
        strength: 10,
        duration: NRS_MEME.M2_3Weeks,
        // xd killed by re stage lmao
        killed_by: ["38009"]
        // the yuyuyui incident too
    }
};

const ReStageMeme = () => {
    return {
        strength: 10,
        duration: NRS_MEME.M1_2Months
    };
};

const ReStageAdditionals = () => {
    return [
        // well it kinda revive 5 million idol franchises so
        // basically a idol gate-opening score idk
        0.25
    ]
}

output({
    // 5680 - K-On!
    "5680": {
        title: "K-On!",
        impacts: [
            {
                // Kinda comfy. But not that much.
                type: Impacts.Comfy,
                score: NRS_CH.NoticableComfiness(1)
            }
        ],
        best_girl: "Nakano Azusa",
        // K-On is pretty boring (4.5 PMMS in NRS1)
        boredom: NRS_BR.KindaBoring(7),
        meme: {
            // During my 9th grade, K-On memes basically dominate the meme world.
            strength: 10,
            duration: NRS_MEME.MMoreThan3Months,
        },
        // Despite being a music anime, K-On songs are not that good.
        // The only notable song in S1 is maybe Kira Kira Days,
        // which is a osugame meme (haha binfy cant fc 1x100 hr fc etc.).
        music: 2
    },
    // 7791 - K-On!!
    "7791": {
        title: "K-On!!",
        impacts: [
            {
                // Kinda comfy. But not that much.
                type: Impacts.Comfy,
                score: NRS_CH.NoticableComfiness(1)
            }
        ],
        best_girl: "Nakano Azusa",
        // K-On is pretty boring (4.5 PMMS in NRS1)
        boredom: NRS_BR.KindaBoring(7),
        meme: {
            // During my 9th grade, K-On memes basically dominate the meme world.
            strength: 10,
            duration: NRS_MEME.MMoreThan3Months,
        },
        // Despite being a music anime, K-On songs are not that good.
        // In S2, the songs are better, with two notable songs, 
        // "Tenshi ni Fureta yo!", which has a banger remix by Asterisk, 
        // and "U&I", which also has a good remix (by "DJ Amaya's Angel 
        // at Dawn" idk).
        // Also, "Tenshi ni Fureta yo!" is one of the most iconic osu! songs.  
        music: 5
    },// 9617 - K-On! Movie
    "9617": {
        title: "K-On! Movie",
        impacts: [
            {
                // Kinda comfy. But not that much.
                type: Impacts.Comfy,
                score: NRS_CH.NoticableComfiness(1)
            }
        ],
        best_girl: "Nakano Azusa",
        // K-On is pretty boring (4.5 PMMS in NRS1)
        boredom: NRS_BR.KindaBoring(7),
        meme: {
            // During my 9th grade, K-On memes basically dominate the meme world.
            strength: 10,
            duration: NRS_MEME.MMoreThan3Months,
        },
        // Despite being a music anime, K-On songs are not that good.
        // In the movie, there is "Tenshi ni Fureta yo!", which has a banger
        // remix by Asterisk. It is also one of the most iconic osu! songs.  
        // Also, "Tenshi ni Fureta yo!" is one of the most iconic osu! songs.  
        music: 3
    },
    // 9756 - Mahou Shoujo Madoka★Magica
    "9756": {
        title: "Mahou Shoujo Madoka★Magica",
        impacts: [
            {
                // 32k got killed over and over, and her lover has to 
                // time-travel everytime it happens
                type: Impacts.Sad,
                pads: 1,
                score: NRS_SD.PADS
            },
            {
                // Kyoko's backstory
                type: Impacts.Sad,
                score: NRS_SD.AppreciableNegativity(5)
            }
        ],
        // MadoMagi fandom are pretty good (I mean they're 
        // mostly the same as the MagiReco fandom).
        community: NRS_CM.Good,
        best_girl: "Kaname Madoka",
        meme: {
            // MadoMagi is the main theme of my 10th grade,
            // with the infamous Puella Magi memes.
            strength: 10,
            duration: NRS_MEME.MMoreThan3Months,
            // Killed by Love Live Niji
            killed_by: ["40879"]
        },
        // MadoMagi has a lot of bangers.
        music: 7
    },
    // 10278 - The iDOLM@STER
    "10278": {
        title: "The iDOLM@STER",
        impacts: [
            {
                // Ending pretty sadge
                type: Impacts.Sad,
                score: NRS_SD.NoticableNegativity(1.5)
            }
        ],
        best_girl: "Minase Iori",
        // idk why i gave this 6 in NRS1 but i'll nerf it to 5 ig.
        music: 5
    },
    // 11757 - Sword Art Online
    "11757": {
        title: "Sword Art Online",
        best_girl: "Yuuki Asuna",
        // OP kinda slaps
        music: 2
    },
    // 11887 - Kokoro Connect
    "11887": {
        title: "Kokoro Connect",
        impacts: [
            {
                // The drama in this anime is executed well, but 
                // it didn't cause any PADS or make me cry.
                type: Impacts.Sad,
                score: NRS_SD.AppreciableNegativity(5)
            },

        ],
        best_girl: "Nagase Iori",
        // OP is shit.
        // ED is ok (i farmed it on osu! a long time ago). 
        music: 1
    },
    // 11981 - Mahou Shoujo Madoka★Magica Movie 3: Hangyaku no Monogatari
    "11981": {
        title: "Mahou Shoujo Madoka★Magica Movie 3: Hangyaku no Monogatari",
        // MadoMagi fandom are pretty good (I mean 
        // they're mostly the same as the MagiReco fandom).
        community: NRS_CM.Good,
        meme: {
            // MadoMagi is the main theme of my 10th grade,
            // with the infamous Puella Magi memes.
            strength: 10,
            duration: NRS_MEME.MMoreThan3Months,
            // Killed by Love Live Niji
            killed_by: ["40879"]
        },
        // It's a movie so music is very limited. Colorful is a banger tho.
        music: 3
    },
    // 12175 - Koi to Senkyo to Chocolate
    "12175": {
        title: "Koi to Senkyo to Chocolate"
    },
    // 12189 - Hyouka
    "12189": {
        title: "Hyouka"
    },
    // 13759 - Sakura-sou no Pet na Kanojo
    "13759": {
        title: "Sakura-sou no Pet na Kanojo",
        impacts: [
            {
                // This is a very good compoly story, meaning
                // there are a lot of truly sad moments in this
                // anime. But a lot records have been lost and
                // idk why I'm sad. Hence we will go with NRS1's
                // 8.5 as the base.
                type: Impacts.Sad,
                score: NRS_SD.AppreciableNegativity(5)
            },
            {
                // The group is kinda comfy ig
                type: Impacts.Comfy,
                score: NRS_CH.NoticableComfiness(2)
            },
            {
                // This and New Game! is recorded to be the 
                // inspiration for me to learn programming
                type: Impacts.Educational,
                score: NRS_ED.InterestNewField
            }
        ],
        best_girl: "Mashiro Shiina",
        // OP is pretty good. idk about the ED tho.
        music: 2
    },
    // 14741 - Chuunibyou demo Koi ga Shitai!
    "14741": {
        title: "Chuunibyou demo Koi ga Shitai!",
        meme: {
            // From NRS1
            strength: 3,
            duration: NRS_MEME.M1_3Days,
        },
        // OP is good (osugame)
        music: 2
    },
    // 14813 - Yahari Ore no Seishun Love Comedy wa Machigatteiru.
    "14813": {
        title: "Yahari Ore no Seishun Love Comedy wa Machigatteiru.",
        impacts: [
            {
                // Hikism-Yukism
                type: Impacts.Educational,
                score: NRS_ED.InspirePolitics
            }
        ],
        best_girl: "Yukinoshita Yukino",
        meme: {
            // Oregairu has a pretty long meme reign
            strength: 10,
            duration: NRS_MEME.M2_3Months
        },
        // Both OP and ED is good. Score is 6
        music: 6
    },
    // 15051 - Love Live! School Idol Project
    "15051": {
        title: "Love Live! School Idol Project",
        meme: {
            // NRS1
            strength: 5,
            duration: NRS_MEME.M4_7Days
        },
        // osu! | Will Stetson - Snow Halation (feat. BeasttrollMC)
        // [Reform's Expert] +HDDT FC 417pp 
        music: 6
    },
    // 16001 - Kokoro Connect: Michi Random
    "16001": {
        title: "Kokoro Connect: Michi Random",
        impacts: [
            {
                // The drama in this anime is executed well, but 
                // it didn't cause any PADS or make me cry.
                type: Impacts.Sad,
                score: NRS_SD.AppreciableNegativity(5)
            },

        ],
        best_girl: "Nagase Iori",
        // OP is shit.
        // ED is ok (i farmed it on osu! a long time ago). 
        music: 1
    },
    // 16067 - Nagi no Asu kara
    "16067": {
        title: "Nagi no Asu kara",
        impacts: [
            {
                // poor best girl
                type: Impacts.Sad,
                pads: 2,
                score: NRS_SD.PADS
            },
            {
                // best girl
                type: Impacts.Love,
                periods: [
                    {
                        from: "1970-01-01",
                        to: "1970-04-01"
                    }
                ]
            }
        ],
        best_girl: "Shiodome Miuna",
        // Nagi Azusa is memed pretty heavily
        memes: {
            strength: 6,
            duration: NRS_MEME.M3Weeks_1Month
        },
        // ebb and flow + osugame carries this shit
        // ebb and flow 3 mod fc xd
        music: 7
    },
    // 16498 - Shingeki no Kyojin
    "16498": {
        title: "Shingeki no Kyojin",
        music: 1,
        best_girl: "Ackerman Mikasa"
    },
    // 18671 - Chuunibyou demo Koi ga Shitai! Ren
    "18671": {
        title: "Chuunibyou demo Koi ga Shitai! Ren",
        impacts: [
            {
                // Shichimiya dead people almost made me cry
                // YouTube link: https://www.youtube.com/watch?v=vFjJ6skYoxI
                type: Impacts.Sad,
                score: NRS_SD.AppreciableNegativity(5)
            }
        ],
        meme: {
            // Shichimiya memes
            strength: 8,
            duration: NRS_MEME.M1_2Weeks
        },
        best_girl: "Shichimiya Satone"
    },
    // 21273 - Gochuumon wa Usagi Desu ka?
    "21273": {
        title: "Gochuumon wa Usagi Desu ka?",
        // fuwa fuwa dong do
        // duy bua ham l
        music: 2,
        best_girl: "Kafuu Chino"
    },
    // 21469 - Stand By Me Doraemon (Represents all Doraemon animes)
    "21469": {
        title: "Stand By Me Doraemon",
    },
    // 21647 - Tamako Love Story
    "21647": {
        title: "Tamako Love Story"
        // There are not many records left.
    },
    // 21845 - Ushinawareta Mirai wo Motomete
    "21845": {
        title: "Ushinawareta Mirai wo Motomete",
        impacts: [
            {
                // Ending did hit me
                type: Impacts.Sad,
                score: NRS_SD.NoticableNegativity(1.5)
            }
        ],
        meme: {
            // osuhow memes
            // This anime saved me in the Math Qualifiers lmao,
            // and VMO2020 too.
            strength: 6,
            duration: NRS_MEME.M1_2Weeks
        },
        // kaomeme top kek
        best_girl: "Sasaki Kaori"
    },
    // 21881 - Sword Art Online II
    "21881": {
        title: "Sword Art Online II",
        best_girl: "Yuuki Asuna",
    },
    // 23209 - Sora no Method
    "23209": {
        title: "Sora no Method",
        impacts: [
            {
                // Drama in this anime is executed pretty well.
                type: Impacts.Sad,
                score: NRS_SD.AppreciableNegativity(5)
            }
        ],
        meme: {
            // beasttrollminecraft
            strength: 4,
            duration: NRS_MEME.M4_7Days
        },
        best_girl: "Noel",
        // First anime to use OP/ED visual + music to strengthen the sadness.
        // OP/ED very good too.
        music: 9
    },
    // 23273 - Shigatsu wa Kimi no Uso
    "23273": {
        title: "Shigatsu wa Kimi no Uso",
        impacts: [
            {
                // YLIA is watched during the SLN days (Second-Love-Ngoc era),
                // this has lead to the connection between myself and the 
                // characters.
                // This is why this anime is so sad that it achieve the maximum 
                // score for an impact (weighted ofc)
                type: Impacts.Sad,
                pads: 999,  // unknown number, but >5
                score: NRS_SD.Cried
            },
            {
                // The character development of Kousei Arima is connected to the
                // Personality Revolution (a result of SLN). This is why I also 
                // feel hype when stuff happens. And I cried to that.
                // No PADS since it's overshadowed by the sad impact.
                type: Impacts.Hype,
                score: NRS_SD.Cried
            }
            // Also the anime itself without these historical events are still
            // very good. It's not just lucky
        ],
        music: 9,
        best_girl: "Miyazono Kaori"
        // no memes because SLN era has no memes
        // it's just lIeN qUAn mOBiLe and dumb trendy shit
    },
    // 23277 - Saenai Heroine no Sodatekata
    "23277": {
        title: "Saenai Heroine no Sodatekata",
        // This was very funny

        // Megumi Katou is the first waifu ever.
        best_girl: "Megumi Katou",
        impacts: [
            {
                type: Impacts.Love,
                periods: [
                    {
                        from: "1970-01-01",
                        to: "1970-04-01"
                    }
                ]
            }
        ],
        // Saekano was huge in the first days of Hiki-Yuki Autism 
        meme: {
            strength: 6,
            duration: NRS_MEME.M1_2Weeks
        },
        // Colorful is one of the most iconic songs in the 
        // Kato-era (not in osu! tho).
        // Also OP slaps
        music: 6
    },
    // 23587 - The iDOLM@STER Cinderella Girls
    "23587": {
        title: "The iDOLM@STER Cinderella Girls",
        best_girl: "Ogata Chieri"
    },
    // 23847 - Yahari Ore no Seishun Love Comedy wa Machigatteiru. Zoku
    "23847": {
        title: "Yahari Ore no Seishun Love Comedy wa Machigatteiru. Zoku",
        impacts: [
            {
                // Oregairu S2 has a lot of drama that I don't even 
                // understand. But it's pretty good ngl.
                type: Impacts.Sad,
                score: NRS_SD.AppreciableNegativity(5)
            },
            {
                // The Yui Depression, when I realize that the VSCC 
                // (Volunteer Service Club Compoly) is not as good as 
                // I thought to be.
                // Read here for more details:
                // http://yaharianalysis.x10host.com/
                // (esp. http://yaharianalysis.x10host.com/parts/Yui/index.php)
                type: Impacts.Sad,
                pads: 999,
                score: NRS_SD.PADS
            },
            {
                // VSCC is pretty comfy (before Yui Depression)
                type: Impacts.Comfy,
                score: NRS_CH.NoticableComfiness(2)
            },
            {
                // Hikism-Yukism
                type: Impacts.Educational,
                score: NRS_ED.InspirePolitics
            }
        ],
        // feel. animated Yui better in S2, so she becomes best girl.
        best_girl: "Yuigahama Yui",
        meme: {
            // Oregairu has a pretty long meme reign
            strength: 10,
            duration: NRS_MEME.M2_3Months
        },
        // Both OP and ED is good. Score is 6
        music: 6
    },
    // 24765 - Gakkougurashi!
    "24765": {
        title: "Gakkougurashi!",
        impacts: [
            {
                // rip Megu-nee
                type: Impacts.Sad,
                score: NRS_SD.Cried
            }
        ],
        best_girl: "Sakura Megumi",
        meme: {
            strength: 2,
            duration: NRS_MEME.M4_7Days,
        },
        // shitai-nara
        // (played this a lot in osugame)
        music: 3
    },
    // 24833 - Ansatsu Kyoushitsu
    "24833": {
        title: "Ansatsu Kyoushitsu",
        best_girl: "Kayano Kaede"
    },
    // 25519 - Yuuki Yuuna wa Yuusha de Aru
    "25519": {
        title: "Yuuki Yuuna wa Yuusha de Aru",
        impacts: [
            {
                // The Itsuki thing made me cry I guess, but there's no PADS.
                // YouTube clip: https://www.youtube.com/watch?v=0bjxQMWXsRE
                type: Impacts.Sad,
                score: NRS_SD.Cried
            },
            {
                // The main group is comfy af, and 
                // they actually used it to make some sad things.
                // Well I cried at the other Itsuki thing
                // no clip this time
                type: Impacts.Comfy,
                score: NRS_CH.Cried
            },
            // maybe yuuna can be a waifu idk
            // {
            //     type: Impacts.Love,
            //     periods: [
            //         {
            //             "from": "1970-01-01",
            //             "to": "1970-01-15"
            //         }
            //     ]
            // }
        ],
        best_girl: "Yuuki Yuuna",
        meme: YuYuYuMeme(),
        /*
        Opening is meh.  
        Ending is good ngl. The contrast between the problems the main girls meet and
        the peaceful nature (visual + sound) of the ED is the second time (after Sora no
        Method), an OP/ED has an actual role in causing sadness/depression/etc.  
        */
        music: 8
    },
    // 25777 - Shingeki no Kyojin Season 2
    "25777": {
        title: "Shingeki no Kyojin Season 2",
        music: 1,
        best_girl: "Ackerman Mikasa"
    },
    // 28677 - Yamada-kun to 7-nin no Majo (TV)
    "28677": {
        title: "Yamada-kun to 7-nin no Majo (TV)",
        best_girl: "Shiraishi Urara",
        // lemur
        music: 4
    },
    // 28851 - Koe no Katachi
    // The first anime ever watched!
    // From now on, seasonal and status properties are going to be changed.
    "28851": {
        title: "Koe no Katachi",
        impacts: [
            {
                // Koe no Katachi has solid drama
                // But sadly, it's the first anime so there's no PADS
                // or tears
                type: Impacts.Sad,
                score: NRS_SD.AppreciableNegativity(5)
            },
        ],
        meme: {
            // the first anime + Giap-Ngoc match = unlimited memes
            strength: 10,
            duration: NRS_MEME.MMoreThan3Months
        },
        best_girl: "Nishimiya Shouko",
        additionals: [
            // Gate-opening score for anime (first anime)
            0.75
        ]
    },
    // 28999 - Charlotte
    "28999": {
        title: "Charlotte",
        impacts: [
            {
                // Charlotte's last part make me feels a little depressed
                // (unknown reason tho)
                type: Impacts.Sad,
                score: NRS_SD.PADS,
                pads: 3
            }
        ],
        best_girl: "Nao Tomori"
    },
    // 30344 - The iDOLM@STER Cinderella Girls 2nd Season
    "30344": {
        title: "The iDOLM@STER Cinderella Girls 2nd Season",
        best_girl: "Ogata Chieri"
    },
    // 30727 - Saenai Heroine no Sodatekata ♭
    "30727": {
        title: "Saenai Heroine no Sodatekata ♭",
        // This was very funny

        // Megumi Katou is the first waifu ever.
        best_girl: "Megumi Katou",
        impacts: [
            {
                type: Impacts.Love,
                periods: [
                    {
                        from: "1970-01-01",
                        to: "1970-04-01"
                    }
                ]
            }
        ],
        // Saekano was huge in the first days of Hiki-Yuki Autism 
        meme: {
            strength: 6,
            duration: NRS_MEME.M1_2Weeks
        },
        // OP slaps
        music: 3
    },
    // 31765 - Sword Art Online Movie: Ordinal Scale
    "31765": {
        title: "Sword Art Online Movie: Ordinal Scale",
        best_girl: "Yuuki Asuna",
        music: 2
    },
    // 31952 - Kono Bijutsubu ni wa Mondai ga Aru!
    "31952": {
        title: "Kono Bijutsubu ni wa Mondai ga Aru!",
        best_girl: "Usami Mizuki"
    },
    // 31953 - New Game!
    "31953": {
        title: "New Game!",
        impacts: [
            {
                // This and Sakura-sou is recorded to be the 
                // inspiration for me to learn programming
                type: Impacts.Educational,
                score: NRS_ED.InterestNewField
            }
        ],
        meme: {
            strength: 2,
            duration: NRS_MEME.M1_3Days
        },
        // ED (Now Loading) is good
        // osugame
        music: 3,
        best_girl: "Iijima Yun"
    },
    // 32281 - Kimi no Na wa.
    "32281": {
        title: "Kimi no Na wa.",
        meme: {
            // Lam-ki - Azu-nyan memes start from here
            strength: 5,
            duration: NRS_MEME.MMoreThan3Months
        },
        // your name has some good songs ig
        music: 4,
        additionals: [
            // Compensation for jealousy in the early days of anime
            0.75
        ]
    },
    // 32526 - Love Live! Sunshine!!
    "32526": {
        title: "Love Live! Sunshine!!",
        meme: {
            // NRS1
            strength: 8,
            duration: NRS_MEME.M1_2Weeks
        },
        // kira kira hikaru yume ga
        // chao em co gai hoan tinh ngau nhat the gian
        // aozora pp heart
        // etc.
        music: 7,
        best_girl: "Sakurauchi Riko"
    },
    // 32729 - Orange
    "32729": {
        title: "Orange",
        impacts: [
            {
                // NRS1
                type: Impacts.Sad,
                score: NRS_SD.AppreciableNegativity(4)
            }
        ],
        best_girl: "Takamiya Naho"
    },
    // 33206 - Kobayashi-san Chi no Maid Dragon
    "33206": {
        title: "Kobayashi-san Chi no Maid Dragon",
        // OP is good ig
        // fhana
        music: 1,
        best_girl: "Tohru"
    },
    // 33573 - BanG Dream!
    "33573": {
        title: "BanG Dream!",
        impacts: [
            {
                // Ending pretty sadge
                type: Impacts.Sad,
                score: NRS_SD.NoticableNegativity(1.5)
            }
        ],
        meme: {
            // NRS 1
            strength: 3,
            duration: NRS_MEME.M4_7Days
        },
        // bang dream songs are good ngl
        music: 3,
        best_girl: "Ichigaya Arisa"
    },
    // 33731 - Gabriel DropOut
    "33731": {
        title: "Gabriel DropOut",
        meme: {
            // iToddlers BTFO
            strength: 5,
            duration: NRS_MEME.M3Weeks_1Month
        },
        best_girl: "Satanichia Kurumizawa McDowell"
    },
    // 34240 - Shelter
    "34240": {
        title: "Shelter",
        impacts: [
            {
                // this is very sad guys
                // no pads tho
                type: Impacts.Sad,
                score: NRS_SD.Cried
            }
        ],
        // catjam song
        music: 3,
        best_girl: "Rin",
        additionals: [
            // short af
            1
        ]
    },
    // 34280 - Gamers!
    "34280": {
        title: "Gamers!",
        best_girl: "Tendou Karen"
    },
    // 34392 - One Room
    "34392": {
        title: "One Room",
        // ME NO MAE NO TOBIRA O AKETARA HARU KAZE
        // TORI TACHI MO KIGI DE MACHIAWASE
        // KIMI E MUKAU SHINGOU AOZORA IRO
        // KAKE DAZEBA II
        // USOTSUKI KAKURITSU RON TOKA
        // ICHI PURASU ICHI GA MUGEN TOKA
        // OSHIETE KURETA KIMI TO SAGASHI NI YUKOU
        // H A R U M A C H I   K U R O B A A A
        best_girl: "Hanasaka Yui",
        music: 3,
        boredom: NRS_BR.Dropped
    },
    // 34498 - Uchiage Hanabi, Shita kara Miru ka? Yoko kara Miru ka?
    "34498": {
        title: "Uchiage Hanabi, Shita kara Miru ka? Yoko kara Miru ka?",
        best_girl: "Oikawa Nazuna",
        impacts: [
            {
                // some SLN stuff (Second-Love-Ngoc)
                type: Impacts.Sad,
                score: NRS_SD.NoticableNegativity(2)
            }
        ],
        // https://www.youtube.com/watch?v=-tKVN2mAKRI
        // 460M lmao
        // (it's decent ig)
        music: 1
    },
    // 34822 - Tsuki ga Kirei
    "34822": {
        title: "Tsuki ga Kirei",
        impacts: [
            {
                // ending sadge
                type: Impacts.Sad,
                score: NRS_SD.AppreciableNegativity(5)
            }
        ],
        best_girl: "Mizuno Akane"
    },
    // 34914 - New Game!!
    "34914": {
        title: "New Game!!",

        // mankai step by step
        // ^ YUYUYU REFERENCE!!11!!!
        // also osugame
        music: 3,
        meme: {
            strength: 2,
            duration: NRS_MEME.M1_3Days
        },
        // Yun and Aoba are both good girls,
        // so one best girl each season
        best_girl: "Suzukaze Aoba"
    },
    // 35241 - Konohana Kitan
    "35241": {
        title: "Konohana Kitan",
        boredom: NRS_BR.OnHold
    },
    // 35507 - Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e (TV)
    "35507": {
        title: "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e (TV)",
        // plot pretty good
        best_girl: "Horikita Suzune"
    },
    "35608": {
        title: "Chuunibyou demo Koi ga Shitai! Movie: Take On Me",
        // The movie doesn't feature Shichimiya that much
        // (also her dead people arc is gone anyways), so
        // there's no notable impacts
        best_girl: "Shichimiya Satone"
    },
    // 35639 - Just Because!
    "35639": {
        title: "Just Because!",
        impacts: [
            {
                // Pretty decent drama
                type: Impacts.Sad,
                score: NRS_SD.AppreciableNegativity(4.5)
            }
        ],
        best_girl: "Natsume Mio"
    },
    // 35756 - Comic Girls
    "35756": {
        title: "Comic Girls",
        best_girl: "Moeta Kaoruko"
    },
    // 35760 - Shingeki no Kyojin Season 3
    "35760": {
        title: "Shingeki no Kyojin Season 3",
        seasonal: true,
        best_girl: "Ackerman Mikasa"
    },
    // 35790 - Tate no Yuusha no Nariagari
    "35790": {
        title: "Tate no Yuusha no Nariagari",
        // This became popular thanks to Reddit.
        // And yes, it's watched in the Reddit-era
        seasonal: true,
        best_girl: "Raphtalia",

        specials: [
            // Anger when MC is treated unfairly (like Oregairu's 8man)
            0.5
        ],
        meme: {
            strength: 5,
            duration: NRS_MEME.M4_7Days
        }
    },
    // 35839 - Sora yori mo Tooi Basho
    "35839": {
        title: "Sora yori mo Tooi Basho",
        // kinda dropped sadge
        boredom: NRS_BR.OnHold,
        impacts: [
            {
                // The first episodes of this anime are very good
                // They took me on an adventure with the girls
                type: Impacts.Hype,
                score: NRS_JH.NoticableHype(2)
            },
            {
                // The girl group are also kinda comfy
                type: Impacts.Comfy,
                score: NRS_CH.NoticableComfiness(1.5)
            }
        ],
        // One Step (osugame)
        // "Koko kara, Koko kara" has made V-Tubers (Hanayori Girls Dorm) a thing
        music: 6,
        best_girl: "Shiraishi Yuzuki"
    },
    // 35860 - Karakai Jouzu no Takagi-san
    "35860": {
        title: "Karakai Jouzu no Takagi-san",
        boredom: NRS_BR.Dropped,
        best_girl: "Takagi"
    },
    // 36038 - Net-juu no Susume
    "36038": {
        title: "Net-juu no Susume",
        best_girl: "Morioka Moriko"
    },
    // 36098 - Kimi no Suizou wo Tabetai
    "36098": {
        title: "Kimi no Suizou wo Tabetai",
        best_girl: "Yamauchi Sakura",
        impacts: [
            {
                // ig this is sad
                type: Impacts.Sad,
                score: NRS_SD.NoticableNegativity(1.5)
            }
        ]
    },
    // 36266 - Mahou Shoujo Site
    "36266": {
        title: "Mahou Shoujo Site",
        best_girl: "Asagiri Aya",
        impacts: [
            {
                // ending is very sad
                type: Impacts.Sad,
                score: NRS_SD.AppreciableNegativity(5)
            }
        ]
    },
    // 36316 - Shichisei no Subaru
    "36316": {
        title: "Shichisei no Subaru",
        best_girl: "Kuga Asahi",
        // coco's Insane
        // Akito's Insane
        // ailv's Insane
        // Seto's Insane
        // Trynna's Insane
        // Doj's Insane
        // Insane
        // osugame
        music: 2,
        impacts: [
            {
                // The drama in this anime is executed fairly well.
                // (It only exists in the first episodes tho)
                type: Impacts.Sad,
                score: NRS_SD.AppreciableNegativity(4)
            }
        ]
    },
    // 36882 - Arifureta Shokugyou de Sekai Saikyou
    "36882": {
        title: "Arifureta Shokugyou de Sekai Saikyou",
        specials: [
            // MC got dumped by his friends made me kinda angry
            0.1
        ],
        best_girl: "Yue"
    },
    // 37141 - Hataraku Saibou (TV)
    "37141": {
        title: "Hataraku Saibou (TV)",
        meme: {
            strength: 3,
            duration: NRS_MEME.M1_3Days
        },
        // Phagocytosis
        music: 2,
        boredom: NRS_BR.Dropped
    },
    // 37450 - Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai
    "37450": {
        title: "Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai",
        boredom: NRS_BR.Dropped,
        // kimi no sei
        music: 1,
        best_girl: "Makinohara Shouko"
    },
    // 37497 - Irozuku Sekai no Ashita kara
    "37497": {
        title: "Irozuku Sekai no Ashita kara",
        boredom: NRS_BR.KindaBoring(7),
        impacts: [
            {
                // ending is pretty sad ngl
                type: Impacts.Sad,
                score: NRS_SD.NoticableNegativity(2)
            }
        ],
        // OP is catjam
        // haha 17 sai = 170 dung funny meme
        music: 3,
        best_girl: "Tsukishiro Hitomi"
    },
    // 37587 - Lapis Re:LiGHTs
    // and thus, the idol meta begins
    "37587": {
        title: "Lapis Re:LiGHTs",

        // very funny desu
        // literally the best anime of the season
        // and in that season there's Oregairu S3
        meme: {
            strength: 9,
            duration: NRS_MEME.M2_3Weeks
        },
        additionals: [
            // Gate-opening score for idol
            0.5
        ],
        // 7e23 (based camellia)
        // OP
        music: 6,
        best_girl: "Tiara"
    },
    // 37744 - Isekai Cheat Magician
    "37744": {
        title: "Isekai Cheat Magician",
        boredom: NRS_BR.Dropped,
        best_girl: "Azuma Rin"
    },
    // 37869 - BanG Dream! 2nd Season
    "37869": {
        title: "BanG Dream! 2nd Season",
        // rip
        boredom: NRS_BR.Dropped,
        meme: {
            // NRS 1
            strength: 2,
            duration: NRS_MEME.M1_3Days
        },
        // bang dream songs are good ngl
        music: 5,
        best_girl: "Ichigaya Arisa"
    },
    // 37926 - Nakanohito Genome [Jikkyouchuu]
    "37926": {
        title: "Nakanohito Genome [Jikkyouchuu]",
        // very funny desu
        meme: {
            strength: 8,
            duration: NRS_MEME.M2_3Months
        },
        best_girl: "Sarayashiki Karin"
    },
    // 37976 - Zombieland Saga
    "37976": {
        title: "Zombieland Saga",
        // kinda funny
        meme: {
            strength: 2,
            duration: NRS_MEME.MLessThanADay
        },
        best_girl: "Minamoto Sakura"
    },
    // 37982 - Domestic na Kanojo
    "37982": {
        title: "Domestic na Kanojo",
        // This anime is the source for the waifu war between 
        // Megumi Katou and Sawamura Spencer Eriri, which is
        // heavily memed back then
        meme: {
            strength: 9,
            duration: NRS_MEME.M2_3Months
        },
        best_girl: "Tachibana Hina",
        impacts: [
            {
                // wtf???
                type: Impacts.Sad,
                score: NRS_SD.NoticableNegativity(1)
            }
        ]
    },
    // 37999 - Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen
    // oh no no no
    "37999": {
        title: "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen",
        // back then, this is a good anime (reddit-piled)
        meme: {
            strength: 9,
            duration: NRS_MEME.M2_3Months
        },
        // but I got tired of the constant spamming of redditors
        // (more like jealous with its popularity, so it got hated)
        // also the ideology in this anime is kinda fucked.
        // and it's also kinda boring too
        boredom: NRS_BR.Dropped,
        best_girl: "Shirogane Kei"
    },
    // 38101 - 5-toubun no Hanayome
    // the dongdo animes
    "38101": {
        title: "5-toubun no Hanayome",
        // funny because muh dong do
        // ?????? WTF YUYUYU REFERENCE!!!11!1
        //                    v
        best_girl: "Nakano Itsuki",
        meme: {
            strength: 8,
            duration: NRS_MEME.M2_3Months
        },
        // fu-utaro-kun
        // u-esugi
        // okinasai yo ayaya
        music: 3
    },
    // 38186 - Bokutachi wa Benkyou ga Dekinai
    "38186": {
        title: "Bokutachi wa Benkyou ga Dekinai",
        meme: {
            // this is a little bit better than gotoubun
            strength: 9,
            duration: NRS_MEME.M2_3Months
        },
        best_girl: "Furuhashi Fumino",
        // OP
        music: 2,
        // also funny af
    },
    // 38256 - Magia Record: Mahou Shoujo Madoka★Magica Gaiden (TV)
    // and it has started...
    "38256": {
        title: "Magia Record: Mahou Shoujo Madoka★Magica Gaiden (TV)",
        // MagiReco-era is one of the most important eras in autism history
        // This is the anime that brought it to life

        // Emotional impacts are all in the game 
        // (Madokami's MGS, Sana's backstory)
        impacts: [
            {
                // Tamaki Iroha is a seasonal waifu
                type: Impacts.Love,
                periods: [
                    {
                        "from": "2020-02-14",
                        "to": "2020-08-14"
                    }
                ]
            }
        ],
        best_girl: "Tamaki Iroha",

        // Community is good
        community: NRS_CM.Good,

        meme: {
            strength: 10,
            duration: NRS_MEME.MMoreThan3Months,
            // Killed by Love Live Niji
            killed_by: ["40879"]
        },
        // Gomakashi was good
        music: 3,

        additionals: [
            // Gate-opening score for gacha games
            0.5
        ]
    },
    "38397": {
        title: "Nande Koko ni Sensei ga!?",
        // this is pure fanservice
        // i thought this could be a sequel 
        // to the Domestic na Kanojo war
        boredom: NRS_BR.Dropped,
        best_girl: "Matsukaze Mayu"
    },
    "38472": {
        title: "Isekai Quartet",
        boredom: NRS_BR.KindaBoring(6),
        best_girl: "Aqua"
    },

    // 38524 - Shingeki no Kyojin Season 3 Part 2
    "38524": {
        title: "Shingeki no Kyojin Season 3 Part 2",
        seasonal: true,
        best_girl: "Ackerman Mikasa",
        // NRS1
        music: 1
    },
    // 38656 - Darwin's Game
    "38656": {
        title: "Darwin's Game",
        // plot is good
        best_girl: "Karino Shuka"
    },
    // 38659 - Shinchou Yuusha: Kono Yuusha ga Ore Tsueee Kuse ni Shinchou Sugiru
    "38659": {
        title: "Shinchou Yuusha: Kono Yuusha ga Ore Tsueee Kuse ni Shinchou Sugiru",
        best_girl: "Ristarte",
        // pretty funny ngl
    },
    // 38691 - Dr. Stone
    "38691": {
        title: "Dr. Stone",
        best_girl: "Ogawa Yuzuriha",
        // good morning sirs
        music: 2,
        // plot is good
    },
    // 38778 - Midara na Ao-chan wa Benkyou ga Dekinai
    "38778": {
        title: "Midara na Ao-chan wa Benkyou ga Dekinai",
        // simple heart dt
        music: 2,
        // rip
        boredom: NRS_BR.Dropped
    },
    // 38790 - Itai no wa Iya nano de Bougyoryoku ni Kyokufuri Shitai to Omoimasu.
    "38790": {
        title: "Itai no wa Iya nano de Bougyoryoku ni Kyokufuri Shitai to Omoimasu.",
        meme: {
            // first war victim
            strength: 0,
            duration: NRS_MEME.MLessThanADay,
            killed_by: ["38256"]
        },
        boredom: NRS_BR.Dropped,
        best_girl: "Maple"
    },
    // 38816 - Hello World
    "38816": {
        title: "Hello World",
        impacts: [
            {
                // it's pretty sad
                // esp. the ova
                type: Impacts.Sad,
                score: NRS_SD.AppreciableNegativity(4)
            }
        ],
        meme: {
            strength: 2,
            duration: NRS_MEME.M1_3Days
        },
        best_girl: "Ichigyou Ruri"
    },
    // 38992 - Rikei ga Koi ni Ochita no de Shoumei shitemita.
    // huge props to be alive
    // (when kaguya is hated af and magireco is destroying everyone)
    "38992": {
        title: "Rikei ga Koi ni Ochita no de Shoumei shitemita.",
        best_girl: "Kanade Kotonoha",
        killed_by: ["38256"]
    },
    // 39324 - Uchi no Ko no Tame naraba, Ore wa Moshikashitara Maou mo Taoseru kamo Shirenai.
    "39324": {
        title: "Uchi no Ko no Tame naraba, Ore wa Moshikashitara Maou mo Taoseru kamo Shirenai.",
        boredom: NRS_BR.Dropped,
        best_girl: "Latina"
    },
    // 39388 - Koisuru Asteroid
    "39388": {
        title: "Koisuru Asteroid",
        // gay anime girls finding asteroid poggers
        meme: {
            strength: 2,
            duration: NRS_MEME.M1_3Days
        },
        best_girl: "Kotonoha Mira",
        // yozora dt 900 combo
        // op too
        music: 5
    },
    // 39468 - Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen
    "39468": {
        title: "Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen",
        best_girl: "Myne"
    },
    // 39523 - Choujin Koukousei-tachi wa Isekai demo Yoyuu de Ikinuku you desu!
    "39523": {
        title: "Choujin Koukousei-tachi wa Isekai demo Yoyuu de Ikinuku you desu!",
        best_girl: "Sarutobi Shinobu"
    },
    // 39547 - Yahari Ore no Seishun Love Comedy wa Machigatteiru. Kan
    "39547": {
        title: "Yahari Ore no Seishun Love Comedy wa Machigatteiru. Kan",
        meme: {
            strength: 2,
            duration: NRS_MEME.M1_3Days,
            // killed by lapis re lights lmao xd
            killed_by: ["37587"]
        },
        impacts: [
            {
                // Yui dead people arc was kinda good
                // but Oregairu is just dead
                // you can't do much about it
                type: Impacts.Sad,
                score: NRS_SD.AppreciableNegativity(4.5)
            }
        ],
        best_girl: "Yuigahama Yui",
        // OP and ED are good
        music: 6
    },
    // 39681 - D4DJ: First Mix
    "39681": {
        title: "D4DJ: First Mix",
        best_girl: "Aimoto Rinku",
        // NRS1 said that this was hyped for new ep, idk
        meme: {
            strength: 1,
            duration: NRS_MEME.M1_3Days,
            killed_by: ["40879"]
        },
        // music is good ig
        // the canon song slaps tho
        music: 5,

    },
    // 39783 - 5-toubun no Hanayome ∬
    "39783": {
        title: "5-toubun no Hanayome ∬",
        // muh yuyuyu idc
        best_girl: "Nakano Itsuki",
        // at first I doubted that S2 will be as good as S1
        // but it actually is
        meme: {
            // but i don't remember how good the meme was tho 
            strength: 5,
            duration: NRS_MEME.M1_2Weeks
        },
    },
    // 39790 - Adachi to Shimamura
    // gay
    "39790": {
        title: "Adachi to Shimamura",
        best_girl: "Hougetsu Shimamura",
        impacts: [
            {
                // A PADS about freedomism
                // (basically I want to be like the girls,
                // skipping out class etc.)
                type: Impacts.Sad,
                pads: 2,
                score: NRS_SD.PADS
            }
        ],
        meme: {
            strength: 0,
            duration: NRS_MEME.MLessThanADay,
            killed_by: ["40879"]
        },
        boredom: NRS_BR.OnHold
    },
    // 39988 - Isekai Quartet 2
    "39988": {
        title: "Isekai Quartet 2",
        boredom: NRS_BR.Dropped,
        best_girl: "Aqua"
    },
    // 40004 - Bokutachi wa Benkyou ga Dekinai!
    "40004": {
        title: "Bokutachi wa Benkyou ga Dekinai!",
        meme: {
            // this is a little bit better than gotoubun
            strength: 9,
            duration: NRS_MEME.M2_3Months
        },
        best_girl: "Furuhashi Fumino",
        // OP
        music: 2,
        // also funny af
    },
    // 40174 - Zombieland Saga: Revenge
    "40174": {
        title: "Zombieland Saga: Revenge",
        // rip
        boredom: NRS_BR.OnHold,
        meme: {
            strength: 0,
            duration: NRS_MEME.MLessThanADay,
            killed_by: ["V12849"]
        },
        best_girl: "Minamoto Sakura",
        // OP is good
        // (this is not an excuse to increase the score)
        music: 2
    },
    // 40550 - Assault Lily: Bouquet
    // haha vietnamese magical girl
    "40550": {
        title: "Assault Lily: Bouquet",
        meme: {
            strength: 3,
            duration: NRS_MEME.MLessThanADay
        },
        // top kek
        best_girl: "Yoshimura Thi Mai"
        // in all seriousness, this is quite good.
        // the 2 main girls are pretty match
        // thank you based shaft
    },
    // 40571 - Majo no Tabitabi
    "40571": {
        title: "Majo no Tabitabi",
        best_girl: "Elaina",
        boredom: NRS_BR.Dropped,

        meme: {
            strength: 8,
            duration: NRS_MEME.M1_2Weeks,
            killed_by: ["40879"]
        },
    },
    // 40783 - Shachou, Battle no Jikan Desu!
    "40783": {
        title: "Shachou, Battle no Jikan Desu!",
        // insert hatsune miku joke here
        best_girl: "Akari",
        meme: {
            strength: 8,
            duration: NRS_MEME.M2_3Months
        }
    },
    // 40815 - Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen 2nd Season
    "40815": {
        title: "Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen 2nd Season",
        best_girl: "Myne"
    },
    // 40839 - Kanojo, Okarishimasu
    "40839": {
        title: "Kanojo, Okarishimasu",
        // shitty romcom
        // get fucked
        boredom: NRS_BR.Dropped
    },
    "40852": {
        title: "Dr. Stone: Stone Wars",
        best_girl: "Ogawa Yuzuriha"
    },
    // 40879 - Love Live! Nijigasaki Gakuen School Idol Doukoukai
    // ah yes, the Ayumu-era
    "40879": {
        title: "Love Live! Nijigasaki Gakuen School Idol Doukoukai",
        seasonal: true,
        // This is written in Oct 24, 2021, 1 year after the 
        // Ayumu era, some scores may not be correct.
        impacts: [
            {
                // Ayumu dead people arc
                type: Impacts.Sad,
                pads: 7,
                score: NRS_SD.PADS
            },
            {
                // "Soshite kimi ga shirazu ni"
                // When Ayumu-era ends, I felt depressed
                type: Impacts.Sad,
                pads: 5,
                score: NRS_SD.PADS
            },
            {
                // Ayumu Uehara became a waifu, and she's the last seasonal 
                // waifu before the decision of making Hatsune Miku the
                // eternal waifu.
                type: Impacts.Love,
                // Period: Nov 2, 2020 to Feb 15, 2021
                periods: [
                    {
                        from: "2020-11-02",
                        to: "2021-02-15"
                    }
                ]
            }
        ],
        community: NRS_CM.Bad,
        best_girl: "Uehara Ayumu",
        specials: [
            // The toxicity of Love Live Niji has created a negative emotion.
            // But it's still an emotion. A very powerful one, in fact.
            // But this is pretty unfair ngl (and the ranking make more 
            // sense without this), so no
            // 3
        ],
        meme: {
            duration: NRS_MEME.MMoreThan3Months,
            strength: 10,
            killed_by: ["M2"]
        },
        music: 7
    },
    // 41389 - Tonikaku Kawaii
    "41389": {
        title: "Tonikaku Kawaii",
        best_girl: "Yuzaki Tsukasa",
        boredom: NRS_BR.Dropped,

        meme: {
            strength: 0,
            duration: NRS_MEME.MLessThanADay,
            killed_by: ["40879"]
        },
        // yunomi ig
        // (it's not that good tbh)
        music: 1
    },
    // 41530 - Magia Record: Mahou Shoujo Madoka★Magica Gaiden (TV) 2nd Season
    "41530": {
        title: "Magia Record: Mahou Shoujo Madoka★Magica Gaiden (TV) 2nd Season",
        // This was watched in the 4chan-era
        // MagiReco and NijiGaku are all gone and not relevant
        // But MagiReco S2 still baffled me ngl
        impacts: [
            {
                // Tamaki Iroha was a seasonal waifu
                type: Impacts.Love,
                periods: [
                    {
                        "from": "2020-02-14",
                        "to": "2020-08-14"
                    }
                ]
            }
        ],
        best_girl: "Tamaki Iroha",

        // Community is good
        community: NRS_CM.Good,

        // Meme was not as good as S1
        // Well, because it's already milked
        meme: {
            strength: 2,
            duration: NRS_MEME.M1_3Days
        },
        // Careless was good
        // never fc on osu
        music: 3
    },
    // 41619 - Munou na Nana
    "41619": {
        title: "Munou na Nana",
        // plot is very good
        meme: {
            strength: 0,
            duration: NRS_MEME.MLessThanADay,
            killed_by: ["40879"]
        },
        best_girl: "Hiiragi Nana"
    },
    // 41930 - Kamisama ni Natta Hi
    "41930": {
        title: "Kamisama ni Natta Hi",
        boredom: NRS_BR.Dropped,
        best_girl: "Izanami Kyouko",
        meme: {
            strength: 0,
            duration: NRS_MEME.MLessThanADay,
            killed_by: ["40879"]
        },
    },
    // 40842 - Idoly Pride
    // the pp anime
    "40842": {
        title: "Idoly Pride",
        // vaxei_osu
        meme: {
            strength: 8.0,
            duration: NRS_MEME.M1_2Weeks,
            killedBy: "35585"
        },
        best_girl: "Kawasaki Sakura",
        music: 4
    },
    M1: {
        type: "Music",
        title: "Hatsune Miku Representative Entry",
        // this will not include Miku songs that is in another entry
        // for example some Miku songs that Kano made

        meme: {
            // Miku is memed pretty consistently
            strength: 6,
            duration: NRS_MEME.MMoreThan3Months
        },
        music: 10,
        impacts: [
            {
                // Miku is the eternal waifu
                type: Impacts.Love,
                periods: [
                    {
                        from: "2021-01-01",
                        to: ""
                    }
                ]
            }
        ],
        additionals: [
            // Well, Miku made Vocaloid relevant ig
            // and Vocaloid is basically the second largest 
            // branch of Japanese music (maybe first?)
            0.75
        ]
    },
    // M2 - Kano-era Representative Entry
    M2: {
        type: "Music",
        title: "Kano-era Representative Entry",
        status: "Non-watchable",
        boredom: NRS_BR.Other,
        meme: {
            // Kano memes are really popular in early 2020, after Ayumu-era ends.
            // (waifu period: 2020-12-01 to 2021-03-01)
            strength: 10,
            duration: NRS_MEME.MMoreThan3Months
        },
        music: 10,
        additionals: [
            // Gate-opening score for V-Tubers
            0.25
        ]
    },
    G1: {
        title: "Magia Record: Mahou Shoujo Madoka★Magica Gaiden",
        type: "Game",
        impacts: [
            {
                // Madokami's MGS
                // It's revealed that in 99% other universes, 
                // Tamaki Ui and her friends are dead, leaving
                // Tamaki Iroha alone and (probably) depressed.
                // This made me cry
                type: Impacts.Sad,
                pads: 999,
                score: NRS_SD.Cried
            },
            {
                // Sana's backstory
                // Basically it's very tragic.
                type: Impacts.Sad,
                score: NRS_SD.Cried
            },
            {
                // Tamaki Iroha is a seasonal waifu
                type: Impacts.Love,
                periods: [
                    {
                        "from": "2020-02-14",
                        "to": "2020-08-14"
                    }
                ]
            }
        ],
        best_girl: "Tamaki Iroha",

        // Community is good
        community: NRS_CM.Good,

        boredom: NRS_BR.Other,

        meme: {
            strength: 10,
            duration: NRS_MEME.MMoreThan3Months,
            // Killed by Love Live Niji
            killed_by: ["40879"]
        },
        // Kakawari and Utsuroi were good
        // also
        // browiec's Wisdom
        // Misunderstanding
        // osu! 9.97⭐UTSUROI +HDDTHR 1108pp | WhiteCat
        music: 6,

        additionals: [
            // Gate-opening score for gacha games
            0.5
        ]
    },
    // V12849 - Ao no Kanata no Four Rhythm (VN)
    V12849: {
        title: "Ao no Kanata no Four Rhythm (VN)",
        type: "Visual Novel",
        // this gave me 1-day PADS wtf
        meme: {
            strength: 8,
            duration: NRS_MEME.M3Weeks_1Month,
            killed_by: ["V27448"]
        },
        // OST really good
        music: 5,
        impacts: [
            {
                // Aokana made me love Asuka for like 2 weeks
                // which is good
                // also there was a PADS
                type: Impacts.Love,
                periods: [
                    {
                        from: "2021-06-02",
                        to: "2021-06-16"
                    }
                ]
            },
            {
                type: Impacts.Sad,
                pads: 1,
                score: NRS_SD.PADS
            }
        ],
        // best_girl: "Satouin Reiko"
        best_girl: "Kurashina Asuka"
    },
    // V27448 - ATRI -My Dear Moments-
    V27448: {
        title: "ATRI -My Dear Moments-",
        status: "Watching",
        //top kek
        boredom: NRS_BR.OnHold,
        impacts: [
            {
                // the plot twist is really sad
                type: Impacts.Sad,
                score: NRS_SD.AppreciableNegativity(4)
            }
        ],
        meme: {
            strength: 5,
            duration: NRS_MEME.M1_2Weeks,
            killed_by: ["enigmatica 2 expert"]
        },
        // OP kinda bops
        music: 3
    },
    // 46471 - Tantei wa Mou, Shindeiru.
    "46471": {
        title: "Tantei wa Mou, Shindeiru.",
        // siesta arc is shit
        // cope
        boredom: NRS_BR.OnHold,
        best_girl: "Natsunagi Nagisa",
        // both OP and ED were good
        // also
        // ngoduyanh achieved rank #12 on mary x jon-YAKITORY - Koko de Ikiteru (TV Size) [Silky's Insane] (osu!)
        music: 6,
        meme: empty_killed_by("41530")
    },
    // 43969 - Kanojo mo Kanojo
    "43969": {
        title: "Kanojo mo Kanojo",
        meme: empty_killed_by("41530"),
        // this is one of the only rom-coms that is
        // watched in the post-MagiReco era, which is
        // already impressive
        // but that's not enough because MagiReco S2
        // is just too good
        boredom: NRS_BR.Dropped,
        best_girl: "Saki Saki"
    },
    // 46093 - Shiroi Suna no Aquatope
    "46093": {
        title: "Shiroi Suna no Aquatope",
        // the concept doesn't hit me
        // so it's fucked
        boredom: NRS_BR.OnHold,
        meme: {
            strength: 6,
            duration: NRS_MEME.MLessThanADay,
            killed_by: ["41530"]
        }
    },
    // 40904 - Bokutachi no Remake
    "40904": {
        title: "Bokutachi no Remake",
        // this was expected to be a good compoly
        // anime, but it doesn't care about that
        // and just march on with its plot
        music: 2,
        best_girl: "Kawasegawa Eiko",
        // The Sweet Youthful Days Of Dreams And Passion
        music: 4,
        meme: {
            strength: 5,
            duration: NRS_MEME.MLessThanADay
        }
    },
    // 44203 - Seirei Gensouki
    "44203": {
        title: "Seirei Gensouki",
        // the hoan tinh anime pt.1
        // from ep 5 to 10 there's no hoan tinh madge
        boredom: NRS_BR.Dropped,
        best_girl: "Claire Celia",
        meme: {
            strength: 10,
            duration: NRS_MEME.M1_2Months,
            killed_by: ["41530"]
        }
    },
    // 41169 - Love Live! Superstar!!
    "41169": {
        title: "Love Live! Superstar!!",
        // insert wakeshima kanon is shibuya kanon joke here
        meme: {
            strength: 5,
            duration: NRS_MEME.M4_7Days,
            killed_by: ["41530"]
        },
        best_girl: "Arashi Chisato",
        boredom: NRS_BR.OnHold,
        // i didn't give attention the songs
        // but they're probably not that good
        music: 0
    },
    // 47790 - Sekai Saikou no Ansatsusha, Isekai Kizoku ni Tensei suru
    "47790": {
        title: "Sekai Saikou no Ansatsusha, Isekai Kizoku ni Tensei suru",
        // the hoan tinh anime pt.2
        status: "Watching",
        best_girl: "Dia", // *insert love live sunshine joke*
        // i ran out of patience with this shit
        // (no dia in ep 5)
        boredom: NRS_BR.Dropped,
        meme: {
            strength: 7,
            duration: NRS_MEME.M2_3Weeks,
            killed_by: ["F25519", "38009"]
        },
    },
    // 48483 - Mieruko-chan
    "48483": {
        title: "Mieruko-chan",
        status: "Watching",
        // watching this is quite frustating ngl
        best_girl: "Yotsuya Miko",
        boredom: NRS_BR.KindaBoring(8),
        meme: empty_killed_by("F25519", "38009")
    },
    // 44275 - Selection Project
    "44275": {
        title: "Selection Project",
        // the pp anime s2
        status: "Watching",
        best_girl: "Hananoi Rena",
        // tbh uta look cuter
        // best_girl: "Koizumi Uta",

        specials: [
            // the CG in this anime actually looks great
            0.1
        ],
        meme: empty_killed_by("F25519", "38009")
    },
    // 48644 - Gyakuten Sekai no Denchi Shoujo
    "48644": {
        title: "Gyakuten Sekai no Denchi Shoujo",
        // battery waifu
        // background somewhat similar to yuyuyu
        status: "Watching",
        best_girl: "Akagi Rin",
        meme: empty_killed_by("F25519", "38009")
    },
    // And now...
    // The yuyuyu sequels!

    // L90810 - Nogi Wakaba wa Yuusha de Aru
    "L90810": {
        title: "Nogi Wakaba wa Yuusha de Aru",
        // Oregairu is dropped so this is the only LN
        // that could be completed, which is kinda huge

        // Update Nov 6, 2021:
        // This LN reading progress will be paused to prioritize the anime.
        // Issue #10 will try to make both S3 and NoWaYu LN get all of the 
        // scores they deserve.

        // Update Nov 12, 2021:
        // ln killed the franchise kek

        impacts: [
            {
                // There are a lot of sad things in this LN
                // Firstly,
                // Shiratori Utano
                // She is used as a distraction, which is pretty cruel
                // (but that's for the greater good).
                // In the final moments, she said:
                // "I am scared. I really, truly am." (YLIA flashbacks)
                // Secondly,
                // Doi Tamako and Iyojima [Anzu]
                // They died before the group could go to a flower-viewing
                // party (idk how to describe this)
                // Thirdly,
                // Koori Chikage
                // man
                // read the shit and see it for yourself
                // man

                // Overall, this LN spams sad shit everywhere,
                // (inb4 yuuna got fucked and i cried)
                type: Impacts.Sad,
                score: NRS_SD.AppreciableNegativity(5)
            }
        ],
        // Yuuki Yuuna also appears in the first chapter
        // but that doesn't count. Also, the second best girl
        // (using basically the same girl is kinda unfair)
        // is Koori Chikage (man)
        best_girl: "Takashima Yuuna",
        meme: YuYuYuMeme(),
        // Also, this LN is read at the same pace as Yuyuyu S3.
        // If I wanted, I would have already finished this way
        // sooner. Therefore, this LN will be delayed, but it's
        // still not On-Hold-ed

        // Yuuki no Baton is in YuYuYui, so no music score Sadge
        // Also the song title is dark
        // music: 3
    },
    // 34284 - Yuuki Yuuna wa Yuusha de Aru: Washio Sumi no Shou
    "34284": {
        title: "Yuuki Yuuna wa Yuusha de Aru: Washio Sumi no Shou",
        // this was not taken very seriously

        // We May Never Meet Again, But I Will Never Forget Your Voice
        music: 4,

        // she looked like best girl ngl
        best_girl: "Tougou Mimori", // or Sumi Washio

        impacts: [
            {
                // gin's death and sonoko spamming magia are sad
                // but my pepega ass doesn't watch this shit properly
                // ffs
                type: Impacts.Sad,
                score: NRS_SD.NoticableNegativity(1)
            }
        ],
        meme: YuYuYuMeme()
    },
    // 34445 - Yuuki Yuuna wa Yuusha de Aru: Yuusha no Shou
    "34445": {
        title: "Yuuki Yuuna wa Yuusha de Aru: Yuusha no Shou",
        // "The Michi Random of Yuuki Yuuna"
        best_girl: "Yuuki Yuuna",
        impacts: [
            {
                // that conversation is peak drama
                // it captures my heart and does make
                // sense (unlike other shits)
                // The fact that Yuuki Yuuna uses the
                // tenets to argue even makes the shit
                // sadder
                // literally the vertex of drama wtf
                //                  ^
                //                  yuyuyu reference !!!11!!1
                type: Impacts.Sad,
                score: NRS_SD.AppreciableNegativity(5)
                // no pads tho
            }
        ],
        meme: YuYuYuMeme(),
        // music was meh tho
    },
    // And the present day
    // 42587 - Yuuki Yuuna wa Yuusha de Aru: Dai Mankai no Shou
    "42587": {
        title: "Yuuki Yuuna wa Yuusha de Aru: Dai Mankai no Shou",
        seasonal: true,
        status: "Watching",
        // I expected this to make a new Ayumu-era (something like
        // Yuuna-era or some dumb shit like that), but it doesn't
        // give a fuck by adapting KuMeYu and NoWaYu in the first
        // 5 (for now) episodes.

        // "But when it wants to fuck up, it can't"
        // The KuMeYu episodes were meh, but in the first NoWaYu ep,
        // it's already made an emotional impact
        impacts: [
            {
                // E5-20:17
                // YLIA flashbacks
                type: Impacts.Sad,
                score: NRS_SD.NoticableNegativity(1.5)
            }
        ],
        best_girl: "Yuuki Yuuna",
        // best girl for KuMeYu is probably the protagonist Kusunoki Mebuki
        // and for NoWaYu is Takashima Yuuna (then Koori Chikage if you can't
        // accept a Yuuna clone)

        meme: YuYuYuMeme(),
        // music was meh tho
        // update: the udon stream map is good
        // https://www.youtube.com/watch?v=s4r_wsszkpk
        // sonoko nogizaka46 yubi bouenkyou anime ban fate fiery extreme armin adventure sotarks new adventure
        music: 2
    },
    // 38009 - Re:Stage! Dream Days♪
    "38009": {
        title: "Re:Stage! Dream Days♪",
        // based anime
        // based music
        // banger
        // nanahira xd
        best_girl: "Aone Shikimiya",
        // funny lmao

        // 367days and ld
        // kirameki and overture
        // the yes we are 1-2 map
        // op and ed decent ig
        // literally best raw music anime
        music: 9,
        // the re stage niji incident
        impacts: [
            {
                type: Impacts.Comfy,
                pads: 1,
                score: NRS_CH.PADS
            }
        ],
        meme: ReStageMeme(),
        // the kirare killing yuyuyu incident omegalul
        // he downloaded the game top kek
        // plasma gun stage

        // based kano reference
        additionals: ReStageAdditionals()
    },
    // 34177 - Tenshi no 3P!
    "34177": {
        title: "Tenshi no 3P!",
        best_girl: "Toriumi Sakura",
        // OP is catJAM osugame
        // fuck the ED i hate that map 
        music: 5,
        // funny ig idk
    },
    // 17919 - Houkago no Pleiades (TV)
    "17919": {
        title: "Houkago no Pleiades (TV)",
        best_girl: "Subaru",
        // OP is the famous Stella-rium
        // ED is good ig
        music: 5
        // btw a mc of this anime has the name itsuki xd
        // yuyuyu reference
        // mc kissed lmao xd
    },
    // 38826 - Tenki no Ko
    "38826": {
        title: "Tenki no Ko",
        best_girl: "Amano Hina",
        impacts: [
            {
                type: Impacts.Sad,
                score: NRS_SD.AppreciableNegativity(4)
            }
        ],
        music: 3,
    },
    // Franchises
    "F14813": combine({
        title: "Yahari Ore no Seishun Love Comedy wa Machigatteiru. (Franchise Entry)",
        from: ["14813", "23847", "39547"]
    }),
    // F25519-1 - Yuuki Yuuna wa Yuusha de Aru (the three seasons)
    "F25519-1": combine({
        title: "Yuuki Yuuna wa Yuusha de Aru (Franchise Entry)",
        from: ["25519", "34445", "42587"]
    }),
    // F25519-1 - Yuusha de Aru series (the three YuYuYu TV seasons + WaSuYu (TV) + NoWaYu (LN))
    "F25519-2": combine({
        title: "Yuusha de Aru (Franchise Entry)",
        from: ["25519", "34445", "42587", "34284", "L90810"]
    }),
    // F9756-1 - Mahou Shoujo Madoka★Magica (without MagiReco)
    "F9756-1": combine({
        title: "Mahou Shoujo Madoka★Magica (Franchise Entry without MagiReco)",
        from: ["9756", "11981"]
    }),
    // F9756-2 - Mahou Shoujo Madoka★Magica (with MagiReco)
    "F9756-2": combine({
        title: "Mahou Shoujo Madoka★Magica (Franchise Entry with MagiReco)",
        from: ["9756", "11981", "G1", "38256", "41530"],
        // G1 and 38256 both have 0.5 additional score for gate-opening gacha games
        additional_nerf: [0.5]
    }),
    // FG1 - Magia Record: Mahou Shoujo Madoka★Magica Gaiden
    "FG1": combine({
        title: "Magia Record: Mahou Shoujo Madoka★Magica Gaiden (Franchise Entry)",
        from: ["G1", "38256", "41530"],
        // G1 and 38256 both have 0.5 additional score for gate-opening gacha games
        additional_nerf: [0.5]
    }),
    // F15051-1 - Love Live! (without NijiGaku)
    // (some ppl say that niji isn't official, more like a side story idc)
    "F15051-1": combine({
        title: "Love Live! (Franchise Entry without NijiGaku)",
        from: ["15051", "32526", "41169"]
    }),
    // F15051-2 - Love Live! (with NijiGaku)
    "F15051-2": combine({
        title: "Love Live! (Franchise Entry with NijiGaku)",
        from: ["15051", "32526", "40879", "41169"]
    }),
    // F14741 - Chuunibyou demo Koi ga Shitai!
    "F14741": combine({
        title: "Chuunibyou demo Koi ga Shitai!",
        from: ["14741", "18671", "35608"]
    }),
    "F11887": combine({
        title: "Kokoro Connect (Franchise Entry)",
        from: ["11887", "16001"]
    }),
    "F23277": combine({
        title: "Saenai Heroine no Sodatekata (Franchise Entry)",
        from: ["23277", "30727"]
    }),
    "F32281": combine({
        title: "Shinkai Makoto's Movies (Franchise Entry)",
        from: ["32281", "38826"]
    }),
    "F33573": combine({
        title: "BanG Dream! (Franchise Entry)",
        from: ["33573", "37869"]
    }),
    "F38136": combine({
        title: "Bokutachi wa Benkyou ga Dekinai (Franchise Entry)",
        from: ["38136", "40004"]
    }),
    "F5680": combine({
        title: "K-On! (Franchise Entry)",
        from: ["5680", "7791", "9617"]
    }),
    "F38101": combine({
        title: "5-toubun no Hanayome (Franchise Entry)",
        from: ["38101", "39783"]
    }),
    "F11757": combine({
        title: "Sword Art Online (Franchise Entry)",
        from: ["11757", "21881", "31765"]
    }),
    "F16498": combine({
        title: "Shingeki no Kyojin (Franchise Entry)",
        from: ["16498", "25777", "35760", "38524"]
    }),
    "F37976": combine({
        title: "Zombieland Saga (Franchise Entry)",
        from: ["37976", "40174"]
    }),
    "F10278": combine({
        title: "The iDOLM@STER (Franchise Entry)",
        from: ["10278", "23587", "30344"]
    }),
    "F23587": combine({
        title: "The iDOLM@STER Cinderella Girls (Franchise Entry)",
        from: ["23587", "30344"]
    }),
    "F39468": combine({
        title: "Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen (Franchise Entry)",
        from: ["39468", "40815"]
    }),
    "F38691": combine({
        title: "Dr. Stone (Franchise Entry)",
        from: ["38691", "40852"]
    }),
    "F38472": combine({
        title: "Isekai Quartet (Franchise Entry)",
        from: ["38472", "39988"]
    }),
    "G2": {
        title: "Re:Stage! Prism Step",
        type: "Game",
        best_girl: "Aone Shikimiya",
        boredom: NRS_BR.Other,

        meme: ReStageMeme(),
        music: 9,

        additionals: ReStageAdditionals()
    },
    "FG2": combine({
        title: "Re:Stage! (Franchise Entry)",
        from: ["38009", "G2"],
        additional_nerf: ReStageAdditionals()
    }),
    // 38544 - Egao no Daika
    "38544": {
        title: "Egao no Daika",
        best_girl: "Yuuki Soleil",
        impacts: [
            {
                type: Impacts.Sad,
                score: NRS_SD.AppreciableNegativity(5)
            }
        ],
        music: 3,
    },
});
