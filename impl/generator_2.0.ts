import {
    generate, MAL, Waifu, PADS, NEI, Meme,
    Emotions, MemeLevel, Cry,
} from '../src/generator_lib_2.0';

function YuYuYuMeme() {
    return Meme(MemeLevel.M2_3Weeks, 0.8);
}

generate([
    {
        id: MAL(40879),
        title: "Love Live! Nijigasaki Gakuen School Idol Doukoukai",

        impacts: [
            Waifu("Uehara Ayumu", "2020-11-02", "2021-02-15"),
            PADS(7, Emotions.CU),
            PADS(5, Emotions.CU),
            NEI(2, Emotions.AU),
            Meme(MemeLevel.MMoreThan3Months, 1.0)
        ],

        relations: [

        ]
    },
    {
        id: MAL(25519),
        title: "Yuuki Yuuna wa Yuusha de Aru",

        impacts: [
            // The Itsuki thing made me cry I guess, but there's no PADS.
            // YouTube clip: https://www.youtube.com/watch?v=0bjxQMWXsRE
            Cry(Emotions.CU),
            
            // The main group is comfy af, and 
            // they actually used it to make some sad things.
            // Well I cried at the other Itsuki thing
            // no clip this time
            Cry(Emotions.MP),

            YuYuYuMeme()
        ]
    }
]);