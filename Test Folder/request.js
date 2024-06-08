function encryptData(data){
    return 'encrypted data'
}

function sendData (url, data){
    const encryptedData = encryptData(data)
    console.log(`sending ${encryptedData} to ${url}`);
}

module.exports = {
    sendData
}