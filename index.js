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

//Middleware
app.use(express.json());

//Route Middleware
app.use("/fablei/user", authRouter);

app.listen(PORT, () =>
	console.log(`Server up and running at port number ${PORT}`)
);
