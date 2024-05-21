// after exporting the functions in our response and request modules we need to import them into here as we plan to make use of them here
// also know that by default the require function looks for js extensions followed by Json then add-ons written in C++ and imported using node files so it's not necessary to add it
// #### first way of writing the import part of this, is as follows
// const response = require('./response')
// const request = require('./request')
// #### second way of writing this will be as follows
// const { sendData, readResponse } = require("./internals");
const {sendData,readResponse} = require('./internals')
// const { readResponse } = require("./response");
// const { sendData } = require("./request");
// import {readResponse } from './response.mjs'
// import {sendData} from './request.mjs'
// here we are creating a function to that is going to make a request against a server to send some data to the server. so the function is going to take two parameters, which are the url to the server and the data that we want to send to the server
function makeRequest(url, data) {
  // so here we want to send the data and then declare the read funtion to read the data parsed back as  a response
  // ### this is one of writing it
  //   request.sendData(url, data)
  //  return  response.read()
  //   ### another way of writing it will be as follows. Note that to make this work, we must have first destructured the particular function we are trynna import from each module first
  sendData(url, data);
  return readResponse();
}

const responseData = makeRequest("https://www.google.com", "hell world");
console.log(responseData);

// in the even that you want to use ES6 modules in node, you have to make sure to use the .mjs extension on each js module file
// when your run Node, make sure to use the new mjs extension

console.log(require.cache);
