const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
};

export default loggerMiddleware;


// const express = require("express");
// const app = express();

// // Application-level
// app.use((req, res, next) => {
//   console.log(`Request method: ${req.method}, URL: ${req.url}`);
//   next(); // pass control to next middleware/route
// });


// const router = express.Router();

// router.use((req, res, next) => {
//   console.log("Router-level middleware triggered");
//   next();
// });

// router.get("/test", (req, res) => res.send("Hello from router!"));
// app.use("/api", router);


// app.use((err, req, res, next) => {
//     console.error("Error:", err.message);
//     res.status(500).json({ error: "Something went wrong" });
//   });
  