const router = require("express").Router();
const userRoutes = require("./user");
const deviceRoutes = require("./device")
// Book routes
router.use("/user", userRoutes);
router.use("/device", deviceRoutes)
module.exports = router;
