const { readResponse } = require("./response");
const { sendData } = require("./request")

function makeRequest(url, data) {
  sendData(url, data);
  return readResponse();
}

const requestedData = makeRequest("http://www.google.com", "Hello world");
console.log(requestedData);


console.log(require.cache);



// NPM
// NODE PACKAGE MANAGER
// Packages are these bundles of code that we can reuse, created by numerous developers and shared to sweeten the developement process for others 
// NPM is used to create and install these pa ckages. npm is resident in node 
A package is a collection of modules