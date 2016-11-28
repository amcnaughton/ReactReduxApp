import React from 'react';

import AddUpdate from './AddUpdate.js';
import { getTrailUpdates } from '../common.js';

class Updates extends React.Component {

  renderUpdate(update, i) {

    return (
      <div className="table update" key={i}>
        <div className="table-row">

          <div className={`table-cell ${update.status}`}>
            <div className={`marker ${update.status}`} />
          </div>

          <div className="table-cell status-cell">
              <div className={`status ${update.status}`}>{update.status === "open" ? "Open" : "Closed"}</div>
          </div>

          <div className="table-cell comment-cell">
              <div className="comment">{update.comment}</div>
          </div>

        </div>
      </div>
    )
  }

  render() {
    const {trailId, count, hideForm} = this.props;
    const updates = getTrailUpdates(trailId, this.props.updates, count);

    return (
      <div className="updates">
        {updates.map(this.renderUpdate)}
        {!hideForm && <AddUpdate trailId={trailId} {...this.props}/>}
      </div>
    )
  }
};

Updates.propTypes = {
  trailId: React.PropTypes.string.isRequired,
  updates: React.PropTypes.array.isRequired,
  count: React.PropTypes.number,
  hideForm: React.PropTypes.bool
}

Updates.defaultProps = {
  count: 10,
  hideForm: false
}

export default Updates;
