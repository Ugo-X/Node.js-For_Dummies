// here we are creating a function to that is going to make a request against a server to send some data to the server. so the function is going to take two parameters, which are the url to the server and the data that we want to send to the server
function request(url, data) {
    // so here we want to send the data and then declare the read funtion to read the data parsed back as  a response 
    sendData(url, data)
    read()
}
// module is a global built in that contains data related to the the current module