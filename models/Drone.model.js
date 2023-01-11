// Iteration #1

const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');
const Schema = moongose.Schema;

const droneSchema = new Schema ({
        name: {type: String},
        propellers: {type: Number},
        maxSpeed: {type: String},
});

const Drone = mongoose.model('Drone', droneSchema);

module.exports = Drone;