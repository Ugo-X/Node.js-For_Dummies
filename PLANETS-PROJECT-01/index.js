// The csv-parse is a parser that converts csv(comma seperated values) text inputs into arrays and objects. it implements the Node.js stream API while providing other Api's for convenience such as the callback and sync Api
// our return value from our csv-parse is a function.
// ** with Node.js stream Api, it is used when maximum power is needed,it ensures scalability by treating data in the sense of a stream from the source to the destination. When working with large datasets, it would help read the code line by line and allow node to work line by line on it rather than waiting for all the data to be read before our node application can do anything.
// working with the csv parse module is incoporated with working with the node file system module, as the parse module only deals with streams, but the file systems module has different functionalities such as the createReadStream which is a functionality that allows us to open a file as a readeable stream.(it takes the name or the path of the file and returns a readeable stream. This readeable stream is  a kind of emmitter that returns various named events depending on what is happening to the file.)
// import { parse }  from "csv-parse" --- the es6 method of doing this

// // This method would help us see the raw data without any interpretation of the comma seperated value file (csv)
// const { parse } = require("csv-parse");
// // place holder for buffers
// const habitablePlanets = [];
// const fs = require("fs");

// // A function that filters habitable planets based on certain properties
// function isaHabitablePlanet(planet) {
//   if (
//     planet["koi_disposition"] === "CONFIRMED" &&
//     planet["koi_insol"] > 0.36 &&
//     planet["koi_insol"] < 1.1 &&
//     planet["koi_prad"] < 1.6
//   )
//     return planet;
// }

// fs.createReadStream("kepler_data.csv")
//   .pipe(
//     parse({
//       comment: "#",
//       columns: true,
//     })
//   )
//   .on("data", (data) => {
//     if (isaHabitablePlanet(data)) {
//       habitablePlanets.push(data);
//     }
//   })
//   .on("error", (err) => {
//     console.log(err);
//   })
//   .on("end", () => {
//     console.log(habitablePlanets.map(planet =>{
//       return planet['kepler_name']
     
//     }));
//     console.log(`${habitablePlanets.length} number of habitable planets found!`);
//     console.log("computation is done, 'voila'");
//   });


// Redo to ascertain that i learnt it properly

const { log } = require('console')
const {parse} = require('csv-parse')
const fs = require('fs')

const habitablePlanets = []

function isAHabitablePlanet(planet){
  if (planet['koi_disposition'] === 'CONFIRMED' && planet['koi_prad'] < 1.6 && planet['koi_insol'] >0.36 && planet['koi_insol'] < 1.1) 
  return planet
}

fs.createReadStream('kepler_data.csv').pipe(parse({
  comment: '#',
  columns: true
})).on('data', (data) =>{
if(isAHabitablePlanet(data)){
  habitablePlanets.push(data)
}
})
.on('error', (err)=>{
console.log(err,'there was an error');
})
.on('end', ()=>{
  console.log(habitablePlanets.map((planet)=>{
    return planet['kepler_name']
  }));
  console.log(`${habitablePlanets.length} is the number of habitable planets`);
})
// Buffers are objets that node uses to represent a collection of bytes
// just to reiterate,columns are vertical and rows are horizontal

// ## After using our node file system functionality, we know have the Kepler data being read, however it's in it's raw form and we need to use the csv-parse dependency to put it in human relatable form. How can we achieve that? we can achieve that by piping the readeable stream source to the writable source destination
// The Mechanics of how it works ______
// * we have our csv file and we read this file as a stream by calling the fs functionality "createReadMe" and passing in the path of the file or the name. This stream called the readeable stream source, is then piped to the writable stream destination which takes in data and processes itr,the wrtiable stream is the result we get from calling the parse function(csv-parse) after invoking the parse function to give us our result.
// IT'S ALWAYS A READEABLE STREAM PROVIDING DATA TO BE PROCESSED FOR A WRITABLE STREAM.
