const request = require('request');
//https://api.thecatapi.com/v1/breeds/search
const args = process.argv.slice(2);
const breedName = args[0];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  const data = JSON.parse(body);
  //console.log(typeof data);
  //console.log(data);
  if (data.length){
  const description = data[0].description;
  console.log(description);
  //console.log('body:', body); // Print the HTML for the given page
  }
  if (!data.length) { 
    console.error(`Failed: ${breedName} does not exist`);
    return;
  }
})




