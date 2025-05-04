const User = require ("../models/User");
const Profile = require ("../models/profile");

const getProfile = async (req, res) => {
    try {
        const profile = await Profile.findOne ({ user: req.user.id });
        res.json(profile);
    } catch (error) {
        res.status(500).json({ message: "Error en el perfil"});
    }
};

const saveProfile = async (req, res) => {
    const { interests, goals } = req.body;
    try {
        let profile = await Profile.findOne ({ user: req.user.id });
        if (profile) {
            profile.interests = interests;
            profile.goals = goals;
            await profile.save ();
        } else {
            profile = new Profile ({ user: req.user.id, interests, goals });
            await profile.save();
        }
        res.json (profile);
    } catch (error) {
        res.status(500).json ({ message: "Error al guardar el perfil"});
    }
};

const toggleFavorite = async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      const routineId = req.params.id;
  
      if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
  
      // Convertimos ObjectIds a string para comparar bien
      const exists = user.favorites.some(fav => fav.toString() === routineId);
  
      if (exists) {
        user.favorites = user.favorites.filter(fav => fav.toString() !== routineId);
      } else {
        user.favorites.push(routineId);
      }
  
      await user.save();
      res.json({ favorites: user.favorites });
    } catch (error) {
      console.error("Error al modificar favoritos:", error.message);
      res.status(500).json({ message: "Error al actualizar favoritos" });
    }
  };

const getFavorites = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate("favorites");
        res.json(user.favorites);
    } catch (error) {
        console.error("Error al obtener los favoritos:", error.message);
        res.status(500).json({ message: "Error al obtener los favoritos"});      
    }
};

module.exports = { getProfile, saveProfile, toggleFavorite, getFavorites };