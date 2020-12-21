import React from 'react';
import FoodList from './FoodList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';
import { withFirstore, isLoaded } from 'react-redux-firebase';

class FoodControl extends React.Component {

  handleClick = () => {
    const { dispatch } = this.props;
  }

  // componentDidMount() {
  //   const { dispatch } = this.props;
  //   dispatch(a.makeApiCall())
  // }

  render() {
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <p>Loading...</p>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <React.Fragment>
          <p>login</p>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser != null)) {

      let currentlyVisibleState = null;

      if (this.props.foodList) {
        currentlyVisibleState = <FoodList
        foodList = {this.props.foodList} />
      } else {
        currentlyVisibleState = <p>Else</p>
      }
      return (
        <React.Fragment>
          {currentlyVisibleState}
        </React.Fragment>
      )
    }
  }
}

FoodControl.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.string
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    error: state.error
  }
}

FoodControl = connect(mapStateToProps)(FoodControl);

export default withFirestore(FoodControl);
