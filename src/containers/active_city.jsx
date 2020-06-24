import React, { Component } from 'react';
import { connect } from 'react-redux';


class ActiveCity extends Component {
  render() {

    if (this.props.activeCity === null) {
      return(
        <div className="active-city">
          <p>Select a city...</p>
        </div>
      );
    }

  const url = `https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`;
  return(
    <div className="active-city">
      <h3>{this.props.activeCity.name}</h3>
      <p>{this.props.activeCity.address}</p>
      <img src={url} width="100%" />
    </div>
  );
};
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
