const mongoose = require("mongoose");

const reservation = new mongoose.Schema({
    roomId: {
        type: Number
    },
    reservedBy: {
        type: String
    },
    from: {
        type: String
    },
    to: {
        type: String
    },
    notes: {
        type: String
    },
})

module.exports = Reservation = mongoose.model('reservation',reservation)