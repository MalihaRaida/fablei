//declaring router
const router = require("express").Router();

//middleware
const verifyToken = require("../middleware/verifyToken");

router.get("/fable", verifyToken, (req, res) => {
	res.send(req.user);
});

module.exports = router;
