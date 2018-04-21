import React, { Component } from 'react';
import { shape, any, func } from 'prop-types';
import { connect } from 'react-redux';

import { exampleAction } from '../_reduxState/actions';

import Button from '../components/Button';

import './App.css';

class App extends Component {
  static propTypes = {
    state: shape({
      example: any,
    }).isRequired,
    dispatch: func.isRequired,
  };

  handleClick = () => {
    this.props.dispatch(exampleAction({ popup_script: 'is loaded.' }));
  };

  render() {
    return (
      <div id="popup-app">
        <p>{JSON.stringify(this.props.state)}</p>
        <Button onClick={this.handleClick}>
          <span>update state</span>
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(App);
