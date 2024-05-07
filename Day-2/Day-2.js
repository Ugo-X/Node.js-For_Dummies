// #38 The require Function(node modules)
// The require function takes a javascript file executes it and returns the code from that file, so that we can reuse it.
// In node we have built in modules and third party that we can access using the right methods
// to make a request ton the google http endpoint, what do we do?

// 1 we use require to set the http module to either a function of the module or a variable, whichever way you want to go about it

// okay here we are requiring the http module which we can use to make a fetch request
const { get } = require("https");

// http is a script that enables you to send requests via local host over the internet

// here we assigned the request to a varaible called req, it can be done without assigning it to the variable though. the request or get functionality on the http module takes two parameters, which are the data and the response callback function the data returned from the request can be accessed from the response by using the 'on' method on the response parameter passed in where it looks for two things, namely an event which in our case is data and the chunck of the response data returned which we can console log and display.
// NB: when we use get, we do not have to use req.end() to get the request to be complete, but get is only used when we want to get data from the api end point
const req = get("https://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(`data chunk: ${chunk}`);
  });
  res.on("end", () => {
    console.log("no more data");
  });
});
