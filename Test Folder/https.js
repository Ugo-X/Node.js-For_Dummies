const { sendData } = require("./request");
const {readData} = require("./response");

function request(url, data) {
  sendData(url, data);
  return readData();
}

const requestedData = request("http://www.google.com", "Hello world");

console.log(requestedData);
