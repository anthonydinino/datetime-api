module.exports = {
  isValidDate: (date1, date2) => {
    if (date1.toString() === "Invalid Date")
      throw new Error("Date one is invalid");
    if (date2.toString() === "Invalid Date")
      throw new Error("Date two is invalid");
  },
};
