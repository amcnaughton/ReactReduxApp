import React from 'react';

import Header from './Header';
import Footer from './Footer';

class Main extends React.Component {

  render() {
    return (
	    <div>
	      <Header/>
	      {React.cloneElement({...this.props}.children, {...this.props})}
	      <Footer/>
	    </div>
    )
  }
}

export default Main;
