import React from 'react';

class Search extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <input
          type="text"
          value={this.props.filterBy}
          onChange={this.props.callback}
        />
      </div>
    );
  }
}

Search.propTypes = {
  filterBy: React.PropTypes.string.isRequired,
  callback: React.PropTypes.func.isRequired,
}

export default Search;