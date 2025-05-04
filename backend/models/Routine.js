
// Array de la rutina con cada uno de los datos correspondientes

const mongoose = require ("mongoose");

const RoutineSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    day: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    activity: { type: String, required: true },
    category: { type: String, required: true },
    isFavorite: { type: Boolean, default: false },
    scheduledAt: { type: Date, required: true }

}, {
    timestamps: true
});

module.exports = mongoose.model ("Routine", RoutineSchema);

