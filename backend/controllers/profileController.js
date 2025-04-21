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

module.exports = { getProfile, saveProfile };