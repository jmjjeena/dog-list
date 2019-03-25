import React from 'react';
import axios from 'axios';
import DogImage from './DogImage.jsx';
// import images from '../../../server/mock-data.js/index.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null,
      // dogs: [],
      selectedBreed: null,
      breeds: null
    }
    // Binding event handler methods to an instance
    this.getBreeds = this.getBreeds.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getImages = this.getImages.bind(this);
  }

  componentWillMount() {
   this.getBreeds();
  }

  getBreeds() {
    axios.get('/breeds')
      .then((response) => {
        console.log('response is: ', response.data);
        this.setState({breeds: response.data})

      })
      .catch(function(error) {
        console.log(error)
      });
  }

  handleClick(curBreed) {
    this.setState({selectedBreed: curBreed}, this.getImages);
  }

  getImages() {
    axios.get(`/images?name=${this.state.selectedBreed}`)
    .then((response) => {
      console.log('Image is: ', response.data)
      this.setState({images: response.data})
    })
    .catch((error) => {
      console.log(error)
    });
  }


  render () {
    console.log("breedsInState: ", this.state.breeds);
    var options = [];
    var breedImg = [];
    var breeds = this.state.breeds
    var images = this.state.images
    if(breeds !== null) {
      for (var i = 0; i < breeds.length; i++) {
        options.push(<div key={i} data-name={breeds[i]} onClick={(e) => this.handleClick(e.target.dataset.name)}>{breeds[i]}</div>)
      }
    }
    if(images !== null) {
      for( var i = 0; i < images.length; i++) {
        breedImg.push(<DogImage src={images[i]}/>)
        // breedImg.push(<img src={images[i]}/>)
      }
    }

    return (
      <div>
        <div>
          {options}
        </div>
        <div>
          {/* <DogImage images={this.state.images}/> */}
          {breedImg}
          {this.state.images && this.state.images.map(image => <DogImage src={image}/>)}
        </div>
      </div>
    );
  }
}

export default App;

//create a var options
// iterate over the existing breeds array
// push each breed in breeds create <option></option>


