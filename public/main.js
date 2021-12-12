async function sendPOST() {
  //Gather all necessary data from page
  let dateOne = document.querySelector("#dateOne").value;
  let dateTwo = document.querySelector("#dateTwo").value;
  const conversion = document.querySelector("#conversion").value;
  const timezoneOne = document.querySelector("#timezoneOne").value;
  const timezoneTwo = document.querySelector("#timezoneTwo").value;
  const result = document.querySelector("#result");

  //add the timezones to each of the dates
  dateOne += timezoneOne;
  dateTwo += timezoneTwo;

  //setup the JSON for posting
  const data = {
    dateOne,
    dateTwo,
    conversion,
  };

  //POST request using fetch
  try {
    const payload = await fetch("/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const response = await payload.json();
    result.innerText = JSON.stringify(response);
  } catch (error) {
    result.innerText = JSON.stringify("Something went wrong...");
  }
}
