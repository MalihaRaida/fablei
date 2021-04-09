//declaring the express
const express = require("express");
const app = express();

//Port config
const PORT = 5000;

//Import Routes
const authRouter = require("./routes/auth");

//Route Middleware
app.use("/fablei/user", authRouter);

app.listen(PORT, () =>
	console.log(`Server up and running at port number ${PORT}`)
);
