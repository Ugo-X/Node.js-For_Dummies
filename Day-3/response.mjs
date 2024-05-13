// Here we want to create two function
// 1 one that decrypts the encrypted data sent back from the server to us and then one that reads that data
// function decrypt(data) {
//   return "decrypted data"
// }


// function read(){
//     return decrypt('data')
// }

// // module is a global built in that contains data related to the the current module

// module.exports = {
//     read,
// }


function decrypt(data){
  return 'decrypted data'  
}

function readResponse (data){
return decrypt('data')
}

export {
    readResponse,
}


