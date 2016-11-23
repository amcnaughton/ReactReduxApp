import React from 'react';
import { Link } from 'react-router';

/*eslint-disable no-unused-vars*/

function Header() {
	return (
			<div>
				<Link to='/'><div className="logo"></div></Link>
			</div>
		);
}

export default Header;