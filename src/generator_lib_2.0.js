const subscores = [
    { name: "Emotion Subscore", combine_weight: 0.8 },
    { name: "Art Subscore", combine_weight: 0.7 },
    { name: "Boredom Subscore", combine_weight: 1.0 },
    { name: "Fandom Subscore", combine_weight: 1.0 },
    { name: "Information Subscore", combine_weight: 1.0 },
    { name: "Additional Subscore", combine_weight: 1.0 },
];

const factor_scores = [
    [
        {
            name: "Activated Unpleasant",
            combine_weight: 0.8
        },
        {
            name: "Activated Pleasant",
            combine_weight: 0.85
        },
        {
            name: "Moderate Unpleasant",
            combine_weight: 0.85
        },
        {
            name: "Moderate Pleasant",
            combine_weight: 0.9
        },
        {
            name: "Calming Unpleasant",
            combine_weight: 0.9
        },
        {
            name: "Calming Pleasant",
            combine_weight: 0.95
        }
    ],
    [
        {
            name: "Language",
            combine_weight: 0.75
        },
        {
            name: "Illustrations",
            combine_weight: 0.5
        },
        {
            name: "Music",
            combine_weight: 0.95
        }
    ],
    [
        {
            name: "Politics",
            combine_weight: 0.85
        },
        {
            name: "General Information",
            combine_weight: 0.9
        } 
    ],
    [
        {
            name: "Boredom",
            combine_weight: 1.0
        }
    ],
    [
        {
            name: "Fandom",
            combine_weight: 1.0
        }
    ],
    [
        {
            name: "Information",
            combine_weight: 1.0
        }
    ],
    [
        {
            name: "Additional",
            combine_weight: 1.0
        }
    ]
];

function calc(impacts) {
    let score_data = { factor_scores: {}, subscores: {}, score: 0.0 };

    const num_subscores = subscores.length;
    for(let subscore_index = 0; subscore_index < num_subscores; subscore_index++) {
        const subscore = subscores[subscore_index];
        const its_factor_scores = factor_scores[subscore_index];

        for(let factor_score of its_factor_scores) {
            const name = factor_score.name;
            let factor_score_values = impacts.map(impact => impact.factor_scores[name]);
            score_data.factor_scores[name] = combine(factor_score_values, factor_score.combine_weight);
        }

        
    }
}