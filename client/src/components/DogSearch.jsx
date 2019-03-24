import React from 'react';

class DogSearch extends React.Component{
  constructor() {
    super();
    //initialize local state
    this.state = {
      breed : '',
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange(e) {
    this.setState({
      breed: e.target.value
    })
  }

  search() {
    this.props.onSearch(this.state.breed);
  }

  render () {
    return (
      <div className="dog-search-bar">
        <input
          className="form-control"
          type="text"
          placeholder = "Breed..."
          value = {this.state.breeds}
          onChange ={this.onChange}
        />
        <button className="btn hidden-sm-down" onClick = {this.search}>Fetch</button>
      </div>
    )
  }
}

export default DogSearch;


