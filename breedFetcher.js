let args = process.argv;
const request = require('request');
// console.log(request);


const search = `https://api.thecatapi.com/v1/breeds/search?q=${args[2]}`;


request(search, (error, response, body) => {
  if (error) {
    //throw Error("The request has failed");
    console.log("Error: the request has failed");
  } else {
    const data = JSON.parse(body); //convert to object
    let description = data[0].description; //Because we accesing the first (and only in this case) entry of an array.
    console.log(description);
  }
});

/*
If data[0].description = ""
*/