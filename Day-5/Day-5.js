// You can always make use of third party modules to get certain functionalities accomplished using node npm ton handle the intended packages to be installed

const axios = require('axios')


// here we want to make a request to a server to get information/data and display it while chaining all branches to our axios functionality as it supports the Promise Api

axios.get('http://www.google.com').then((response)=>{
console.log(response);
})
.catch((err)=>{
    console.log(err);
}).then(()=>{
    console.log("all done");
})


// what is this node modules folder?
// contains all the modules that we install from npm and is usally next to the package.json
// inside our node modules folder we have the axios folder which contains all the axios functionalities and then the follow redirects folder, amidst other folders.
// The axios package depends on the redirects library/package, it is configured to follow redirect links if the webserver has been configured to redirect you
// ## When we install a package, or a dependency that has another dependency, by default, node will include that dependency inside the node modules folder side by side, and not inside the package folder that requires the dependencies like in the case of axios requiring the follow redirects package. One important reason for not embeding "follow redirects in the axios folder", is in such a case where another package requires same dependency, to reduce the need to duplicate that dependency