const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./services/db");

sequelize
  .authenticate()
  .then(() => console.log("Database connected!"))
  .catch((err) => console.error("Error connecting to the database:", err));

sequelize
  .sync()
  .then(() => {
    console.log("Tables have been created!");
  })
  .catch((error) => {
    console.error("Error creating tables:", error);
  });

const signedUrlRouter = require("./routes/signed_url");
const userRouter = require("./routes/user");

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());

app.use("/signed_url", signedUrlRouter);
app.use("/user", userRouter);

app.get("/health", (_, res) => {
  res.status(200).send("OK");
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
