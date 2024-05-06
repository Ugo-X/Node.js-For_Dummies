// How to use promises in a real world situation
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/albums",
  "https://jsonplaceholder.typicode.com/posts",
];

// Promise.all(urls.map((url)=>{
// return fetch(url).then((reponse) => reponse.json()).then((data)=>{
//     console.log(data);
// })
// }))

// USING ASYNC/AWAIT
// async function fetchUsers() {
//   const response = await fetch(urls[0]);
//   const data = await response.json();
//   console.log(data[0],data[1]);
// //   return data[0]
// }

// fetchUsers();

// REAL LIFE EXAMPLE OF ASYNC/AWAIT/finally

// async function getData(){
//   try {
//     const [users, albums, posts] = await Promise.all(urls.map(async (url) => {
//         const response = await fetch(url)
//         if(!response.ok){
//             throw new Error(`HTTP error! status: ${response.status}`)
//         }
//      const data = await response.json()
//   return data
//       }))
//       console.log(users, albums,posts);
//   } catch (error) {
//     console.log("error", error.message);
//   }
// //   finally will run regardless of if the code above is fulfilled or rejected
//   finally{
//     console.log('the world is green when the sun is high in the sky');
//   }
// }

// getData()

// const loopThroughUrls = url =>{
//     for (const url of urls) {
//         console.log(url);
//     }
// }

// loopThroughUrls()

// using for await of loop
// const getData2 = async () => {
//   const arrayOfPromises = urls.map(async (url) => await fetch(url));
//   for await (let response of arrayOfPromises) {
//     console.log(response);
//     const data = await response.json();
//     console.log(data);
//   }
// };

// getData2();

// # # # # # # # # # #
// when dealing with promises, there are three ways to run them
// 1 parallel which runs them all at the same time

// 2 sequential which runs each promise or call in order
// 3 race (call three things but whichever comes back first, do that one and ignore the rest )

const promisify = (item, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(item), delay));
const a = () => promisify("a", 1000);
const b = () => promisify("b", 2000);
const c = () => promisify("c", 3000);

// The parallel way of running
const parallel = async () => {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `parallel is done running: ${output1} ${output2} ${output3}`;
};

parallel().then((data) => console.log(data));

// ### The sequential way of running it

const sequential = async () => {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequential is done running: ${output1} ${output2} ${output3}`;
};

sequential().then((data) => console.log(data));

// the race method of running it
// note that this method runs one and ignores the rest of the promises
const race = async () => {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `The race is over and the winner is ${output1}`
};

race().then((data) => console.log(data));

// promise.allSettled runs all the promises regardless of if they are fulfiled or rejected. when they return, you will se which one was rejected or settled.
