import React from 'react';

class Search extends React.Component {

  render() {
   return (
      <div>
        <input
          className="search-box"
          type="search"
          placeholder="Search..."
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