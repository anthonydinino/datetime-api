const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//importing the necessary errorhandler and functions
const { isValidDate } = require("./errorhandler");
const {
  daysBetween,
  weekdaysBetween,
  completeWeeksBetween,
} = require("./tools");

// allows the use of json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//hosts the static files in the public folder
app.use(express.static("public"));

//starts the server listening at a port
app.listen(PORT, () => {
  console.log("listening on port " + PORT + "...");
});

//POST request is sent
app.post("/", (req, res) => {
  try {
    //parses the date strings as date objects and validates
    dateOne = new Date(req.body.dateOne);
    dateTwo = new Date(req.body.dateTwo);
    isValidDate(dateOne, dateTwo);

    //calculation of variables using imported functions
    daysBetweenValue = daysBetween(dateOne, dateTwo);
    completeWeeksBetweenValue = completeWeeksBetween(daysBetweenValue);
    weekdaysBetweenValue = weekdaysBetween(
      dateOne,
      dateTwo,
      daysBetweenValue,
      completeWeeksBetweenValue
    );

    res.json({
      daysBetween: daysBetweenValue,
      weekdaysBetween: weekdaysBetweenValue,
      completeWeeksBetween: completeWeeksBetweenValue,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});
