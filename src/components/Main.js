import React from 'react';

import { Grid } from 'react-bootstrap';

import Header from './Header';
import Footer from './Footer';

class Main extends React.Component {

  render() {
    return (
    	<Grid>
	      <div>
	        <Header/>
	        {React.cloneElement({...this.props}.children, {...this.props})}
	        <Footer/>
	      </div>
      </Grid>
    )
  }
}

export default Main;
