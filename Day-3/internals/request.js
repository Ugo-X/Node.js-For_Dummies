// Here we want to create the function that sends the data and this function is going to take two parameters which are the uniform resource locator(where we want to send the data to ) and the data to be sent to this location
// Also since we are making use of the https module which is a secure mode of getting and sending data we have to encrypt that data so for this example we will have a function that does that to

function encrypt (data){
    return 'encrypted data'
}

function sendData(url, data){
   const encryptedData =  encrypt(data)
   console.log(`sending ${encryptedData} to ${url}`);
}

// // module is a global built in that contains data related to the the current module

module.exports = {
    sendData,
}


// function encrypt (data){
// return 'encrypted document'
// }

// function sendData (url, data){
//   const encryptedData =  encrypt(data)
// console.log(`sending ${encryptedData} to ${url}`);
// }


// export {
//     sendData,
// }