const mongoose = require ("mongoose");

const RoutineSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    day: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    activity: { type: String, required: true },
    category: { type: String, enum: [ "técnico","lectura", "idiomas", "otro" ], default: "otro" }

}, {
    timestamps: true
});

module.exports = mongoose.model ("Routine", RoutineSchema);