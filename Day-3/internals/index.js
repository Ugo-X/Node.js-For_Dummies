const request = require("./request");
const response = require("./response");

// module.exports = {
//  sendData: request.sendData,
//   readResponse: response.readResponse,
// };

// going for a more professional outlook, we have... the use of spreadoperatotor
// the spreadopeerator basically unpacks all the properties of our modules and makes them acessible in the same property names as we have in the modules. Below is an example

module.exports = {
    ...require('./request'),
    ...require('./response')
}
