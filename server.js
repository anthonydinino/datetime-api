const express = require("express");
const {
  daysBetween,
  weekdaysBetween,
  completeWeeksBetween,
} = require("./tools");

const app = express();
const PORT = process.env.PORT || 3000;

// allows the use of json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//hosts the static files in the public folder
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log("listening on port " + PORT + "...");
});

app.post("/", (req, res) => {
  try {
    res.json(req.body);
  } catch (error) {
    res.send(error.message);
  }
});
