import React, { Component } from 'react';
import { connect } from 'react-redux';

class Restaurants extends Component {

  render() {

    let restaurants = this.props.restaurants[0] 
      ? this.props.restaurants.map((restaurant, index) => <li key={index}>{restaurant.name}</li>)
      : <li>No restaurants yet</li>

    return (
      <div>
        <ul>
          {restaurants}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { restaurants: state.restaurants }
}

export default connect(mapStateToProps)(Restaurants);
