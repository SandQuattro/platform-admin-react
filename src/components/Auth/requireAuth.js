import React, {Component} from 'react';
import {connect} from 'react-redux';

export default ChildComponent => {
  class ComposedComponent extends Component {

    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth.token && !localStorage.getItem("token")) {
        this.props.history.push('/auth');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
