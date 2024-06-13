const {sendData} = require('./request')
const {readData} = require('./response')
// const { sendData, readData } = require("../Test-Folder");
function request(url, data) {
  sendData(url, data);
  return readData();
}

const requestedData = request("http://www.google.com", "Hello world");

console.log(requestedData);

console.log(require.cache);


// ### to install packages, we have to first initialize our node application with the node tool which will create the package.json file for us. How do we do this? by running npm init(note if you do not want to have to answer all the questions that follow and set it to the default values, you can use npm init -y)