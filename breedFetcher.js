const request = require('request');
//https://api.thecatapi.com/v1/breeds/search



const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    const description = data.length > 0 ? data[0].description : null;
    callback(error,description);
    
  });
};
 




module.exports = {fetchBreedDescription};