import React, { Component } from 'react';
import base from '../base';
import Search from './Search';
import Trail from './Trail';
import '../css/App.css';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {

  constructor() {
    super();

    this.state = {
      data: {},
      filterBy: ''
    }
  }

  componentWillMount() {
    // this runs right before the <App> is rendered
    this.ref = base.syncState('data', {
      context: this,
      state: 'data'
    });
  }

  updateFilter = (event) => {
    this.setState({filterBy: event.target.value});
  }

  render() {
    const { trails, updates, users } = this.state.data;

    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">React App</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Welcome to React</h1>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                View React Bootstrap Docs
              </Button>
            </p>
          </Grid>
        </Jumbotron>

        <Search filterBy={this.state.filterBy} callback={this.updateFilter}/>

            {JSON.stringify(trails)}
            {JSON.stringify(updates)}
            {JSON.stringify(users)}

      {
        trails && 
        trails
        .filter(trail => ~trail.name.toUpperCase().indexOf(this.state.filterBy.toUpperCase()))
        .map(trail => 
            <Trail 
              key={trail.id} 
              details={trail}
              updates={
                        updates
                          .filter(item => item.trail_id === trail.id)
                          .sort((a, b) => b.timestamp - a.timestamp)
                      } 
            />)
      }

      </div>
    );
  }
}

export default App;
