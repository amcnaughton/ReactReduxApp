import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Likes extends React.Component {

  render() {
    const { trailId, trail, increment } = this.props;

    return (
      <span className="likes-wrapper">
        <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          <span key={trail.likes} className="likes-heart">{trail.likes}</span>
        </CSSTransitionGroup>
        <a onClick={() => increment(trailId)} className="likes">&hearts; <span className="likes-count">{trail.likes}</span></a>
      </span>
    );
  }
}

Likes.propTypes = {
  trailId: React.PropTypes.number.isRequired,
  trail: React.PropTypes.object.isRequired,
  increment: React.PropTypes.func.isRequired
}

export default Likes;