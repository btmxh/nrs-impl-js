// Change this to change the CSV format
const labels = [
    "ID",
    "Title",
    "Overall",
    "Emotion",
    "Meme",
    "Music",
    "Additional"
];

const output = entry => {
    return [
        entry.id,
        entry.title,
        entry.score.value,
        entry.score.emotion.value,
        entry.score.meme.value,
        entry.score.music.value,
        entry.score.additional.value
    ];
};

// Script content
const fs = require("fs");
const csv = require("csv");
const data = JSON.parse(fs.readFileSync("impl/nrs.json"));
let output_data = [labels];
for(const entry of data.entries) {
    output_data.push(output(entry));
}
csv.stringify(output_data, (_, out) => {
    fs.writeFileSync("impl/nrs.csv", out);
})

