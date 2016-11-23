import React from 'react';

import { RadioGroup, Radio } from 'react-radio-group';

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
      selectedStatus: ''
    };
  }

  // update trail status
  handleChange = (value) => {
    this.setState({
      selectedStatus: value
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
      selectedStatus: ''
    });
  }

  render() {
    const {trailId} = this.props;

    return (
      <div>
        <form ref="updateForm" className="add-update" onSubmit={this.handleSubmit}>
          <p>Update Trail Status</p>
          <input type="hidden" ref="trail" defaultValue={trailId} />
          <input type="text" ref="user" placeholder="user" defaultValue="allan" />
          <input className="comment" type="text" ref="update" placeholder="How's the trail look?" />
          <div>
            <RadioGroup className="status" name="status" selectedValue={this.state.selectedStatus} onChange={this.handleChange}>
              <Radio value="open" />Open
              <Radio value="closed" />Closed
            </RadioGroup>
          </div>
          <button name="submit" className="submit">Submit</button>
        </form>
      </div>
    )
  }
};

AddUpdate.propTypes = {
  trailId: React.PropTypes.string.isRequired
}

export default AddUpdate;
