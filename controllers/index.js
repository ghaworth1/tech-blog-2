const router = require("express").Router();
// const apiRoutes = require("./api")
const homeRoutes = require("./home-routes");
const commentRoute = require("./api/comment-routes");
const userRoute = require("./api/user-routes");
const postRoute = require("./api/post-routes");

// Set up routes
router.use("/", homeRoutes);
// router.use("/api", apiRoutes)
router.use("/api/comments", commentRoute);
router.use("/api/users", userRoute);
router.use("/api/posts", postRoute);

// Export the router
module.exports = router;