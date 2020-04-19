const router = require("express").Router();
const decorRoutes = require../../controllers/decor-ctrl

// Book routes
router.use("/decor", bookRoutes);

module.exports = router;
