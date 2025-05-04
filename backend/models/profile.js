const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, // guardar el ID del usuario
            ref:"User",
            required:true
    },
    interests: { type: [String],
        default: []
    },
    goals: { type: String, // objetivo general
        default: ""
    }
},  { timestamps: true // guarda fecha de creacion y modificacion
});