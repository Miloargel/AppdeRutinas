const Routine = require("../models/Routine");

//crear una rutina

const createRoutine = async (req,res) => {
    try {
        const { day, startTime, endTime, activity, category } = req.body;

        const rutina = new Routine ({
            user: req.user.id,
            day,
            startTime,
            endTime,
            activity, 
            category
        });
        await rutina.save ();
        res.status (201).json (rutina);
    } catch (error) {
        console.error ("error al crear la rutina", error.message);
        res.status(500).json ({ message: "Error al crear la rutina"});
    }
};

// obtener las rutinas del perfil iniciado
const getRoutines = async (req, res) => {
    try {
        const rutinas = await Routine.find ({ user: req.user.id });
        res.json(rutinas);
    } catch (error) {
        console.error ("Error al obtener las rutinas", error.message);
        res.status(500).json({ message: "Error al obtener las rutinas"});
    }
};

module.exports = { createRoutine, getRoutines };