const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-route");


// Set up routes
router.use("/", homeRoutes);
router.use("/api", apiRoutes);


// Export the router
module.exports = router;