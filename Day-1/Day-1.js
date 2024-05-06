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

async function getData(){
  try {
    const [users, albums, posts] = await Promise.all(urls.map(async (url) => {
        const response = await fetch(url)
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`)
        }
     const data = await response.json()
  return data
      }))
      console.log(users, albums,posts);
  } catch (error) {
    console.log("error", error.message);
  } 
//   finally will run regardless of if the code above is fulfilled or rejected
  finally{
    console.log('the world is green when the sun is high in the sky');
  }
}

getData()


// const loopThroughUrls = url =>{
//     for (const url of urls) {
//         console.log(url);
//     }
// }

// loopThroughUrls()

// using for await of loop
const getData2 = async()=>{
    const arrayOfPromises = urls.map( async url => await fetch(url))
    for await (let request of arrayOfPromises){
        console.log(request);
    }

}

getData2()