# Date and Time API

## Live Demo

[Click Here](https://aligent-datetime-api.herokuapp.com/)

## How to run

1. Ensure Node version v14.00 or later
2. Run command `npm install` to install necessary files.
3. Run command `npm start` to host on localhost:3000
4. Open any browser and visit `localhost:3000`

## Test

- Run command `npm run test` to see tests.

## Date parameters

- API expects 2 ISO date parameters like `"2021-12-08T12:00+10:30"` where `+10:30` is the timezone.

## Conversion

- Use path parameters to input a conversion either seconds, minutes, hours, days, weeks or years
- Example: `localhost:3000/minutes`

## Key Points

I chose Node.js for my runtime due to reduced boiler plate code, ease-of-use and popularity.

I chose express also due to it's minimalistic yet robust set of features and popularity with Node.js.

I chose for the user to input ISO date strings because they store the most information with the least amount of characters.
