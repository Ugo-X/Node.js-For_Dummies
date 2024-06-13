const { readResponse } = require("./response");
const { sendData } = require("./request")

function makeRequest(url, data) {
  sendData(url, data);
  return readResponse();
}

const requestedData = makeRequest("http://www.google.com", "Hello world");
console.log(requestedData);


console.log(require.cache);