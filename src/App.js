import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StuffList from './StuffList';
class App extends Component {
  render() {
      return (
        <div className="app">
          <StuffList />
        </div>
      );
    }
}
export default App;