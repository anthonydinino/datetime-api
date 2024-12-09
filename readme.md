# Date and Time API

## Live Demo

[Click Here](https://datetime-api.vercel.app/)

## How to run

1. Ensure Node version v14.00 or later
2. Run command `npm install` to install necessary files.
3. Run command `npm start` to host on localhost:3000
4. Open any browser and visit `localhost:3000`

## Testing

- Run command `npm run test` to see test results.

## Date parameters

- API expects 2 ISO date parameters like `"2021-12-08T12:00+10:30"` where `+10:30` is the timezone.

## Conversion Parameter

- Use path parameters to input a conversion either seconds, minutes, hours, days, weeks or years
- Example: `localhost:3000/minutes`

## Key Points

Node.js was used for the runtime due to reduced boiler plate code, ease-of-use and popularity.

Express.js was chosen due to it's minimalistic yet robust set of features and popularity with Node.js.

The POST request method was used instead of the GET method for it's versatility and for avoiding long URL strings to pass data.

ISO date strings are parsed because they store the most information with the least amount of characters.

The conversion parameter is parsed using path parameters. This is because the conversion will affect all values of the response.

A mini front-end was built for ease-of-use and to save times inputting values.
