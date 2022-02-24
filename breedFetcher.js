let args = process.argv;
const request = require('request');


const search = `https://api.thecatapi.com/v1/breeds/search?q=${args[2]}`;

const fetchBreedDescription = function(breedName, (error, description) => {
  if (error) {
    throw Error("There's an error")
  } else {

    request(search, (error, response, body) => {
      if (error) {
        throw Error("The request has failed");
        //console.log("Error: the request has failed");
      } else {
        if (body === "[]") {
          console.log(`We could not find any information about the - ${args[2]} - breed`);
        } else {
          const data = JSON.parse(body); //convert to object
          let description = data[0].description; //Because we accesing the first (and only in this case) entry of an array.
          console.log(description);
        }
      }
    });


  }



});


module.exports = {fetchBreedDescription};
  





//Above: Refactored to move the manin request logic into a function, to later test it

//Below: Original activity

// let args = process.argv;
// const request = require('request');
// // console.log(request);


// const search = `https://api.thecatapi.com/v1/breeds/search?q=${args[2]}`;

// request(search, (error, response, body) => {
//   if (error) {
//     throw Error("The request has failed");
//     //console.log("Error: the request has failed");
//   } else {
//     if (body === "[]") {
//       console.log(`We could not find any information about the - ${args[2]} - breed`);
//     } else {
//       const data = JSON.parse(body); //convert to object
//       let description = data[0].description; //Because we accesing the first (and only in this case) entry of an array.
//       console.log(description);
//     }
//   }
// });




