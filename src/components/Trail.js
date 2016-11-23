import React from 'react';
import { Link } from 'react-router';

import Likes from './Likes';
import Updates from './Updates'

class Trail extends React.Component {

	render() {
		const {trail} = this.props;

		return (
			<div>	
				<div className="trail-header">
					{trail.name}
					<Likes trailId={+trail.id} trail={trail} increment={this.props.increment}/>
				</div>
				<div className="trail-description">{trail.description}</div>
      	<Updates trailId={String(trail.id)} count={1} hideForm={true} {...this.props}/>
				<div className="text-center">
					<ul className="list-inline detail-links">
						<li><Link to={`/trail/${trail.id}`}>Update Status</Link></li>
						<li><Link to={`/trail/${trail.id}`}>Details</Link></li>
						<li><Link to={`/trail/${trail.id}`}>Directions</Link></li>
					</ul>
				</div>
			</div>
		)
	}
}

Trail.propTypes = {
  trail: React.PropTypes.object.isRequired
}

export default Trail;