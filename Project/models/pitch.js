const mongoose = require('mongoose')

//Schema for posting and fetching pitch
const pitchSchema = new mongoose.Schema({

    entrepreneur: {
        type: String,
        required: true,
    },

    pitchTitle: {
        type: String,
        required: true,
    },

    pitchIdea: {
        type: String,
        required: true,
    },

    askAmount: {
        type: Number,
        required: true,
    },

    equity: {
        type: Number,
        required: true,
    },

    pitchTime: {
        type: Date,
        default: Date.now,
    },

    offers: [
        {
            id: {
                type: mongoose.Schema.Types.ObjectId,
            },

            investor: {
                type: String
            },

            amount: {
                type: Number
            },

            equity: {
                type: Number
            },

            comment: {
                type: String
            },
        },
    ]
});

module.exports = mongoose.model('Pitch', pitchSchema)