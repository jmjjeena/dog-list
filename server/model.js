var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dogSchema = new Schema({
  breed: String,
  images: [String]
})

var Dog = mongoose.model('Dog', dogSchema);


module.exports = mongoose.model('Dog', dogSchema)

// var newDog = {
//   breed: "blah",
//   images: ""
// }

// var dog = new Dog(newDog);
// dog.save(function(err) {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log('Got saved')
//   }
// })



// module.exports.Dog = Dog;