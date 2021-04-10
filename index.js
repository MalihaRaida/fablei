//declaring the express
const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

//mongoDB connection
const mongoose = require("mongoose");
mongoose.connect(
	process.env.DB_CONNECT,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log("Connected");
	}
);

//Port config
const PORT = 5000;

//Import Routes
const authRouter = require("./routes/auth");
const fableRouter = require("./routes/fable");

//Middleware
app.use(express.json());

app.use("/fablei", authRouter);
app.use("/fablei", fableRouter);

app.listen(PORT, () =>
	console.log(`Server up and running at port number ${PORT}`)
);
