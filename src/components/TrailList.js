import React, { Component } from 'react';
import Trail from './Trail';
import Search from './Search';

import { Grid } from 'react-bootstrap';

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

    return (
      <Grid>
        <div>
          <Search {...this.props} filterBy={this.state.filterBy} callback={this.updateFilter}/>
          {
            trails
            .filter(trail => ~trail.name.toUpperCase().indexOf(this.state.filterBy.toUpperCase()))
            .map(trail => <Trail key={trail.id} trail={trail} {...this.props}/>)
          }
        </div>
      </Grid>


    );
  }
}

export default TrailList;