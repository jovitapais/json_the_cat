const request = require('request');
const args = process.argv.splice(2);
const breed = args[0];
console.log(breed);
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  //console.log(typeof body);
  if(error) {
    console.error('error:', error); // Print the error if one occurred
    return;
  } 
  const data = JSON.parse(body);
  //console.log(data);
  //console.log(typeof data);
  console.log(data[0].description);
  
});




