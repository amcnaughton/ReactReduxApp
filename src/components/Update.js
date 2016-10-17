import React from 'react';

class Update extends React.Component {

	render() {
		const { details } = this.props;

		return (
			<li>
				{details.comment}
			</li>
		)
	}
}

Update.propTypes = {
  details: React.PropTypes.object.isRequired,
}

export default Update;