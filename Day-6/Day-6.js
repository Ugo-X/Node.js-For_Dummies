// SEMANTIC VERSIONING
// This is way of versioning packages that uses "MAJOR.MINOR.PATCH"

// * The MAJOR versioning has to do with when you make very impactful changes to the package(incompatible API changes). It is almost like releasing a new package altogether.

// * The MINOR versioning refers to updates and minor compatible changes made to the package(adds functionalities to the package without breaking compatibility.)

// * The PATCH is usually used for smaller bug fixes 

// ## semantic versioning is used to versioning our dependcies
// Eg "version": 1.0.0 -- if we are to make a minor verion change here, the version number would become 1.1.0

//# PACKAGE-LOCK.JSON
// A more specific description of the installed dependencies,that helps us to work with other developers and avoid bugs.
// it indicates where the dependency is coming from, and has an integerity test to verify that the package or dependency is not corrupt. It also indicates all of this for the dependencies of these installed packages/dependencies. A good example is the follow redirect axios dependency.

// npm audit - helps us to see the vulnerabilities of our packages and with npm audit fix( or npm audit fix --force) we can fix this vulnerabilites by updating our version(recall semantic versioning works as MAJOR.MINOR.PATCH(1.20.0)- where Major refers to a major change in the package, more like releasing a new package. MINOR semantic versioning is employed when a functionality is added or there is an addition to the package. Patch usually comes in the form of bug fixes)

// ##NODEMON

// nodemon is an npm tool that helps develop Node.js applications by automatically restarting the node application when a file change is detected in the file directory. nodemon is an executable that we use to run our node code when our source code changes
const axios = require('axios')
axios.get("https://www.google.com").then((response)=>{
    console.log(response);
}).then(()=>{
console.log('All done');
}).catch((err)=>{
    console.error();('error:',err);
})

// you can install nodemon globally, by using the following command `npm install -g nodemon`