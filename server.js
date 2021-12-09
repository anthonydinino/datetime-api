const express = require("express");
const res = require("express/lib/response");
const app = express();
const PORT = process.env.PORT || 3000;

//importing the necessary errorhandlers and functions
const { isValidDates, isValidConversion } = require("./errorhandler");
const { daysBetween, weekdaysBetween, weeksBetween } = require("./tools");

// allows the use of json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//hosts the static files in the public folder
app.use(express.static("public"));

//starts the server listening at a port
app.listen(PORT, () => {
  console.log("listening on port " + PORT + "...");
});

app.post("/:conversion", (req, res) => {
  try {
    //retrieves all neccesary data from post request
    dateOne = new Date(req.body.dateOne);
    dateTwo = new Date(req.body.dateTwo);
    const conversion = req.params.conversion;

    //error handling
    isValidDates(dateOne, dateTwo);
    isValidConversion(conversion);

    res.json({
      daysBetween: 0,
      weekdaysBetween: 0,
      weeksBetween: 0,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});
