const User = require ("../models/User");
const bcrypt = require ("bcryptjs");
const jwt = require ("jsonwebtoken");

const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let user = await User.findOne ({ email });
        if (user) return res.status(400).json ({message: "El usuario ya existe"});

        const hashedPass = await bcrypt.hash (password, 10);
        user = new User ({ name, email, password: hashedPass });
        await user.save ();

        const token = jwt.sign ({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d"});

        res.json ({ token, user: { id: user._id, name, email } });
    } catch (error) {
        console.error ("Error en el registro", error.message);
        res.status(500).json ({ message: "Error en el servidor"});
    }
};

const login = async ( req, res ) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne ({ email });
        if (!user) return res.status(400).json({ message: "Credenciales inválidas"});

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json ({ message: "Credenciales inválidas"});

        const token = jwt.sign ({ id: user._id}, process.env.JWT_SECRET, {expiresIn: "7d"});
    } catch (error) {
        console.error("Error en el login", error.message);
        res.status(500).json({ message: "Error en el servidor "});
    }
};

module.exports = { register, login };
