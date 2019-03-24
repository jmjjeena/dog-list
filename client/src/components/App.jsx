import React from 'react';
import $ from 'jquery';
import DogSearch from './DogSearch.jsx';
import DogImage from './DogImage.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);
    // Binding event handler methods to an instance
    this.search = this.search.bind(this);
  }

  // componentDidMount()

  search(breed) {
    console.log(`${breed} was searched`);
    $.ajax({
      method: "POST",
      url: '/dogs',
      data: {dogBeed: breed},
      dataType: "text",
      success: console.log('The breed is: ', breed)
    })
  }

  render () {
    return (
      <div>
        <div>
          <DogSearch onSearch={this.search}/>
        </div>
        <div>
          <DogImage />
        </div>
      </div>
    );
  }
}

export default App;