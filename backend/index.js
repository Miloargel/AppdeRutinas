const express = require ("express");
const dotenv = require ("dotenv");
const connectDB = require ("./config/db");
const cors = require ("cors");

dotenv.config();
connectDB();

const app = express ();

app.use(cors());
app.use(express.json());

app.use("/api/users", require("./routes/auth"));
app.use ("/api/profile", require("./routes/profile"));
app.use('/api/routine', require('./routes/routine'));


const PORT = process.env.PORT || 4500;
app.listen(PORT, () => console.log (`Servidor corriendo en puerto ${PORT}`));
