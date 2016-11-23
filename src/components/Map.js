import React from 'react';

const GMAPS_API_KEY = 'AIzaSyB2dbN7gCeEMHkNNdc-isVv6nQh_eTKCLQ';

class Map extends React.Component {

  render() {
    const location = encodeURIComponent(this.props.location);
    const iframe = 
      `<iframe
          width="600"
          height="450"
          frameborder="0" style="border:0"
          src=https://www.google.com/maps/embed/v1/place?key=${GMAPS_API_KEY}&q=${location}&zoom=14" allowfullscreen>
       </iframe>`;

    return (
      <div className="google-maps" dangerouslySetInnerHTML={{__html: iframe}}/>
    );
  }
}

Map.propTypes = {
  location: React.PropTypes.string.isRequired
}

export default Map;