var {breeds, dogImages} = require('./mock-data');

module.exports = {
  getBreedImages: (breed, res) => {
    //get this from API
    res.send(dogImages)
  }
}