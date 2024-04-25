const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { PORT } = require("./src/config/config");
const routerUser = require("./src/routes/user.routes");
const emailRoutes = require("./src/routes/email.routes");
const tokenRoutes = require("./src/routes/token.routes");
const foodRoutes = require("./src/routes/food.routes");
const { fetchFoods } = require("./src/controller/foods.controller");
const supabase = require("./src/db/db");
// const { createTableIfNotExists } = require("./src/model/icecream.model");
// createTableIfNotExists();

const app = express();
app.use(cors());
app.use(express.json());

// app.use("/api", routerUser);
// app.use("/api", emailRoutes);
// app.use("/api", tokenRoutes);
app.use("/api", foodRoutes);
app.get("/", async (req, res) => {
  res.json("Hello World");
});
fetchFoods();
app.listen(PORT, () => console.log(`Server runing at PORT ${PORT}`));
