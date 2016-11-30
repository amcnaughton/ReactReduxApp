import React, { Component } from 'react';

import Trail from './Trail';
import Search from './Search';

class TrailList extends Component {

  constructor() {
    super();

    this.state = {
      filterBy: ''
    };
  }

  // update the search filter. bind to lexical 'this'
  updateFilter = (event) => {
    this.setState({filterBy: event.target.value});
  }

  render() {
    const { trails, updates, users } = this.props;
    const searchResults = trails.filter(trail => ~trail.name.toUpperCase().indexOf(this.state.filterBy.toUpperCase()));

    return (
        <div>
          <Search {...this.props} filterBy={this.state.filterBy} callback={this.updateFilter}/>
          {
            searchResults.length ?
              searchResults.map(trail => <Trail key={trail.id} trail={trail} {...this.props}/>) : 
              <div className="no-results">
                Sorry, no trails match your search!
                <div className="endo"/>
              </div>
          }
        </div>


    );
  }
}

export default TrailList;