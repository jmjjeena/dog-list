import React from 'react';
import $ from 'jquery';
import DogSearch from './DogSearch.jsx';
import DogImage from './DogImage.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: []
    }
    // Binding event handler methods to an instance
    this.search = this.search.bind(this);
    // this.getList=this.getList.bind(this);
    this.setState=this.setState.bind(this);
  }

  // componentDidMount() {
  //   this.getList();
  // }

  // getList() {
  //   console.log("request data");
  //   $.ajax({
  //     method: 'GET',
  //     url: "/",
  //     success: function(breed) {
  //       this.setState({
  //         dogs: JSON.parse(breed)
  //       })
  //     },
  //     error: function(error) {
  //       console.log('Error' ,error)
  //     }
  //   })
  // }

  search(breed) {
    console.log(`${breed} was searched`);
    $.ajax({
      method: "POST",
      url: '/',
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify({dogBeed: breed}),
      success: console.log('The breed is: ', breed)
    })
  }

  render () {
   var searched;
   if(this.state.search !== null) {
     searched = <div>{this.state.search}</div>
   }
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