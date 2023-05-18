const mongoose = require ('mongoose');

const akademijaSchema = new mongoose.Schema ({
    naziv: {
        type: String,
    },
    adresa: {
        type: String,
    },
    vremetraenje: {
        type: Number,
    },
    slusateli: {
        type: Number,
    },
    kurs: {
        type: String,
    },
});

const Akademija = mongoose.model ('Akademija', akademijaSchema);
module.exports = Akademija;