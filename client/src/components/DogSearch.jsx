import React from 'react';

class DogSearch extends React.Component{
  constructor() {
    super();
    this.state = ({
      value : ''
    })

  }

  render () {
    return (
      <div className="dog-search-bar">
        <input className="form-control" type="text" />
        <button className="btn hidden-sm-down">Fetch</button>
      </div>
    )
  }
}

export default DogSearch;


