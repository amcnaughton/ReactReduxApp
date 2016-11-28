import React from 'react';
import { Link } from 'react-router';

import Updates from './Updates';
import Likes from './Likes';
import Map from './Map';
import { getTrailIndex } from '../common.js';


class TrailDetail extends React.Component {

  render() {
  	const { trailId } = this.props.params;
  	const { trails } = this.props;
  	const trail = trails[getTrailIndex(trailId, trails)];

    return (
      <div className="trail-details">
      	<div className="trail-header">
					{trail.name} 
					<Likes trailId={+trailId} trail={trail} increment={this.props.increment}/>
				</div>
      	<div className="trail-description">{trail.description}</div>
      	<Updates trailId={trailId} {...this.props}/>
				<Link to='/'><div className="back-button"/></Link>
				<Map location={trail.location}/>
      </div>
    );
  }

}

TrailDetail.propTypes = {
  // trails: React.PropTypes.array.isRequired
}

export default TrailDetail;