import React from 'react';

/**
 * Allow user to update trail status and add comment
 * 
 * @class AddUpdate
 * @extends {React.Component}
 */
class AddUpdate extends React.Component {

  constructor() {
    super();

    // initialize trail status radio button
    this.state = {
      selectedStatus: 'open'
    };
  }

  // user changed trail status
  handleStatusChange = (changeEvent) => {
    this.setState({
      selectedStatus: changeEvent.target.value
    });
  } 

  // submit update to Redux
  handleSubmit = (e) => {
    e.preventDefault();

    const trail = this.refs.trail.value;
    const user = this.refs.user.value;
    const update = this.refs.update.value;
    const status = this.state.selectedStatus;

    // create action
    this.props.addUpdate(trail, user, update, status);

    // clear form 
    this.refs.updateForm.reset();

    // clear trail status
    this.setState({
      selectedStatus: 'open'
    });
  }

  render() {
    const {trailId} = this.props;

    return (
      <div className="table add-update-wrapper">
        <div className="table-row">

          <div className={`table-cell marker-cell ${this.state.selectedStatus}`}/>

          <form ref="updateForm" className="table-cell add-update" onSubmit={this.handleSubmit}>
            <p>Update Trail Status</p>

            <input type="hidden" ref="trail" defaultValue={trailId} />
            <input type="hidden" ref="user" placeholder="user" defaultValue="allan" />
            <input className="comment" type="text" ref="update" placeholder="How's the trail look?" />

            <div className="button-bar">
              <div className="switch">
                <input type="radio" className="switch-input" name="status" value="open" id="open" defaultChecked onChange={this.handleStatusChange} />
                <label htmlFor="open" className="switch-label switch-label-off">Open</label>
                <input type="radio" className="switch-input" name="status" value="closed" id="closed" onChange={this.handleStatusChange} />
                <label htmlFor="closed" className="switch-label switch-label-on">Closed</label>
                <span className="switch-selection"></span>
              </div>
              <button name="submit" className="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
};

AddUpdate.propTypes = {
  trailId: React.PropTypes.string.isRequired
}

export default AddUpdate;
