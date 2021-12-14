async function sendPOST() {
  //Gather all necessary data from page
  let dateOne = document.querySelector("#dateOne").value;
  let dateTwo = document.querySelector("#dateTwo").value;
  const conversion = document.querySelector("#conversion").value;
  const timezoneOne = document.querySelector("#timezoneOne").value;
  const timezoneTwo = document.querySelector("#timezoneTwo").value;

  //Gather table DOM elements
  const error = document.querySelector("#error");
  let header1 = document.querySelector("#header1");
  let header2 = document.querySelector("#header2");
  let header3 = document.querySelector("#header3");
  let value1 = document.querySelector("#value1");
  let value2 = document.querySelector("#value2");
  let value3 = document.querySelector("#value3");

  //attach the timezones to each of the dates
  dateOne += timezoneOne;
  dateTwo += timezoneTwo;

  //setup the POST request
  const data = {
    dateOne,
    dateTwo,
  };

  //POST request using fetch
  try {
    error.innerHTML = "";
    const payload = await fetch(`/${conversion}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const response = await payload.json();

    //grabs all the keys of response
    const keys = Object.keys(response);

    //output response into respective DOM elements
    header1.innerHTML = keys[0];
    header2.innerHTML = keys[1];
    header3.innerHTML = keys[2];
    value1.innerHTML = response[keys[0]];
    value2.innerHTML = response[keys[1]];
    value3.innerHTML = response[keys[2]];
  } catch (err) {
    error.innerText = "Something went wrong, check developer tools";
  }
}
