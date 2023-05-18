const mongoose = require ('mongoose');

const kursSchema = new mongoose.Schema ({
    ime: {
        type: String,
    },
    oblast: {
        type: String,
    },
    akademija: {
        type: String,
    },
    adresa: {
        type: String,
    },
    casovi: {
        type: Number,
    },
    predavac: {
        type: String,
    },
});

const Kurs = mongoose.model ("Kurs", kursSchema);
module.exports = Kurs;