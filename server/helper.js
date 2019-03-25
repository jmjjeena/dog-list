var {breeds, dogImages} = require('./mock-data');
var axios = require('axios');


module.exports = {
  getBreedImages: (breed, res) => {
    //get this from API
    axios.get(`https://dog.ceo/api/breed/${breed}/images`)
      .then(function(response){
        console.log('Response from API: ', response.data)
        res.send(response.data.message)
      })
      .catch(function (error) {
        console.log(error)
        res.status(400).send('Failure');
      });
  }
}