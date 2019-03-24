import React from 'react';
import DogSearch from './DogSearch.jsx';
import DogImage from './DogImage.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    //initialize local state
    this.state = {
      dogs: []
    }
    // Binding event handler methods to an instance
    // this.handleClick = this.handleClick.bind(this);
  }

  // componentDidMount()

  render () {
    return (
      <div>
        <div>
        <DogSearch />
        </div>
        <div>
          <DogImage />
        </div>
      </div>
    );
  }
}

export default App;