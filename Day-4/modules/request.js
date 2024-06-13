function encrypt(data) {
  return `encrypted data`;
}

function sendData (url, data) {
  const encryptedData = encrypt(data);
  return `sending ${encryptedData} to ${url}`;
}

module.exports = {
  sendData,
};
