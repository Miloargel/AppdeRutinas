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
      const routines = await Routine.find({ user: req.user.id });
      res.json(routines);
    } catch (error) {
      console.error('Error al obtener las rutinas:', error.message);
      res.status(500).json({ message: 'Error al obtener las rutinas' });
    }
  };

// editar rutina
const updateRoutine = async (req, res) => {
    try {
        const rutina = await Routine.findById(req.params.id);

        if (!rutina) return res.status(404).json( {message:"Rutina no encontrada"});
        if (rutina.user.toString () !== req.user.id)
            return res.status(403).json({ message: "No autorizado"});

        const { day, startTime, endTime, activity, category } = req.body;

        rutina.day = day || rutina.day;
        rutina.startTime = startTime || rutina.startTime;
        rutina.endTime = endTime || rutina.endTime;
        rutina.activity = activity || rutina.activity;
        rutina.category = category || rutina.category;

        const rutinaActualizada = await rutina.save();
        res.json(rutinaActualizada);
    } catch (error) {
        console.error ("Error al editar la rutina:", error.message);
        res.status(500).json({ message: "Error al editar la rutina "});
    }
};

//Borrar rutina
const deleteRoutine = async (req, res) => {
    try {
        const rutina = await Routine.findById(req.params.id);

        if (!rutina) return res.status(404).json({ message: "Rutina no encontrada"});
        if (rutina.user.toString() !== req.user.id)
        return res.status(403).json({ message: "No autorizado"})

        await rutina.deleteOne();
        res.json ({ message: "Rutina eliminada"});
    } catch (error) {
        console.error ("Error al eliminar la rutina", error.message);
        res.status(500).json({ message: "Error al eliminar la rutina"});
    }
}

module.exports = { createRoutine, getRoutines, updateRoutine, deleteRoutine };