import React from 'react';
import Update from './Update'

class Trail extends React.Component {

	render() {
		const { details, updates } = this.props;

		return (
			<li>
				{details.name}
				<ul>
					{
						updates.map(update => 	
							<Update 
								key={update.id} 
								details={update} 
							/>)
					}
				</ul>
			</li>
		)
	}
}

Trail.propTypes = {
  details: React.PropTypes.object.isRequired,
  updates: React.PropTypes.array,
}

export default Trail;