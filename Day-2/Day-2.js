// #38 The require Function(node modules)
// The require function takes a javascript file executes it and returns the code from that file, so that we can reuse it.
// In node we have built in modules and third party that we can access using the right methods
// to make a request ton the google http endpoint, what do we do?

// 1 we use require to set the http module to either a function of the module or a variable, whichever way you want to go about it

// okay here we are requiring the http module which we can use to make a fetch request
// const { get } = require("https");

// http is a script that enables you to send requests via local host over the internet

// here we assigned the request to a varaible called req, it can be done without assigning it to the variable though. the request or get functionality on the http module takes two parameters, which are the data and the response callback function the data returned from the request can be accessed from the response by using the 'on' method on the response parameter passed in where it looks for two things, namely an event which in our case is data and the chunck of the response data returned which we can console log and display.
// NB: when we use get, we do not have to use req.end() to get the request to be complete, but get is only used when we want to get data from the api end point
// const req = get("https://www.google.com", (res) => {
//   res.on("data", (chunk) => {
//     console.log(`data chunk: ${chunk}`);
//   });
//   res.on("end", () => {
//     console.log("no more data");
//   });
// });

const { get } = require("https");

const req = get("https://www.google.com", (response) => {
  response.on("data", (chunkOfData) => {
    console.log(`chunk of data: ${chunkOfData}`);
  });
  response.on("end", () => {
    console.log(
      "here the data comes to an end, so stop console login wetin no"
    );
  });
});


// In software development, particularly in the context of programming languages like JavaScript, Python, and others, a module is a file or collection of files containing reusable code that can be imported and used in other parts of a program. Modules help organize code, promote reusability, and improve maintainability by breaking down a program into smaller, manageable units.

// Here are some key characteristics and functions of modules:

// 1. **Encapsulation**: Modules encapsulate related code, data, or functionality, making it easier to understand and manage complex systems. They provide a way to group together related components of a program.

// 2. **Reusability**: Modules promote code reuse by allowing developers to define functionality once and then import and use it in multiple parts of their program or in different programs altogether.

// 3. **Separation of Concerns**: Modules help enforce the separation of concerns principle by dividing a program into distinct sections, each responsible for a specific aspect of functionality. This separation improves code organization and makes it easier to maintain and debug.

// 4. **Namespacing**: Modules provide a namespace for their contents, preventing naming conflicts between different parts of a program. This allows developers to use descriptive names for variables, functions, and classes without worrying about clashes with identifiers used elsewhere in the program.

// 5. **Importing and Exporting**: Modules typically define what functionality they want to expose to other parts of the program through exports, and they can import functionality from other modules using import statements. This mechanism allows modules to interact with each other in a controlled and predictable manner.

// 6. **Modularity**: The concept of modularity, facilitated by modules, encourages breaking down a program into smaller, independent units that can be developed, tested, and maintained separately. This improves code organization, facilitates collaboration among developers, and enables better scalability of projects.

// In summary, a module is a self-contained unit of code that provides a specific set of functionality and can be imported and used by other parts of a program. Modules are fundamental building blocks of modern software development, enabling code reuse, maintainability, and scalability.




// #### CREATING OUR MODULES
