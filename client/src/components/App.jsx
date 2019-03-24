import React from 'react';
import DogList from './DogList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleClick = this.handleClick.bind(this);
  }


  render () {
    return (
      <div>
        <DogList />
      </div>
    );
  }
}

export default App;