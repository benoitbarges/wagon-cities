import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setActiveCity } from '../actions';


class City extends Component {

  handleClick = () => {
    this.props.setActiveCity(this.props.city);
  }


  render() {

    let classes = "list-group-item";
    if (this.props.city === this.props.activeCity) {
      classes += " selected";
    }

    return (
      <div className={classes} onClick={this.handleClick}>
        {this.props.city.name}
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity: setActiveCity },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
