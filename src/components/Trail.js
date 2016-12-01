import React from 'react';
import { Link } from 'react-router';

import Likes from './Likes';
import Updates from './Updates'

class Trail extends React.Component {

	render() {
		const {trail} = this.props;

		return (
			<div className="clearfix trail-summary">
				<div className="trail-header">
					{trail.name}
					<Likes trailId={+trail.id} trail={trail} increment={this.props.increment} />
					<Link to={`/trail/${trail.id}`}><span className="details-button" /></Link>
				</div>
				<div className="trail-image">
					<Link to={`/trail/${trail.id}`}>
						<img src={`/files/${trail.image}`} />
					</Link>
				</div>
				<div className="trail-description">{trail.description}</div>

				<Updates trailId={String(trail.id)} count={1} hideForm={true} {...this.props} />

				<div className="link-panel">
					<div className="update-link">
						<Link to={`/trail/${trail.id}`}>Update Status</Link>
					</div>
					<div className="directions-link">
						<Link to={`/trail/${trail.id}`}>Directions</Link>
					</div>
				</div>

			</div>
		)
	}
}

Trail.propTypes = {
  trail: React.PropTypes.object.isRequired
}

export default Trail;