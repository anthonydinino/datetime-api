# Date and Time API

## How to run

1. Download or clone repository into a selected folder.
2. Download and install Node.js using this [link](https://nodejs.org/en/download/).
3. Check node is working in your terminal using command `node --version`
4. Navigate to the root of the selected folder in the terminal.
5. Run command `npm install` to install necessary files.
6. Run command `npm start` to host on localhost:3000
7. Open any browser and visit `localhost:3000`

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
