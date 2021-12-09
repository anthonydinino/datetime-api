module.exports = {
  isValidDates: (date1, date2) => {
    if (date1.toString() === "Invalid Date")
      throw new Error("Date one is invalid");
    if (date2.toString() === "Invalid Date")
      throw new Error("Date two is invalid");
  },
  isValidConversion: (conversion) => {
    switch (conversion) {
      case undefined:
        break;
      case "seconds":
        break;
      case "minutes":
        break;
      case "hours":
        break;
      case "years":
        break;
      default:
        throw new Error(
          "Pick a valid conversion type: seconds, minutes, hours or years"
        );
    }
  },
};
