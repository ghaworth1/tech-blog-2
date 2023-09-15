const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");


// Set up routes
router.use("/", homeRoutes);
router.use("/api", apiRoutes);


// Export the router
module.exports = router;