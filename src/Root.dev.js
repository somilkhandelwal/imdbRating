import React, { Component, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { history } from './service/history';

export default class Root extends Component {
  render() {
    const { routes, store } = this.props;

    return (
      <Provider store={store}>
          <Suspense fallback="...">
            <Router history={history}>{routes}</Router>
          </Suspense>
      </Provider>
    );
  }
}

Root.propTypes = {
  routes: PropTypes.node.isRequired,
  store: PropTypes.shape({}).isRequired,
};
