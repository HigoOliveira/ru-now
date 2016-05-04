import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
require('offline-plugin/runtime').install();
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const rootEl = document.getElementById('root');
ReactDOM.render(
  <AppContainer component={App} style={{margin: 0}} />,
  rootEl
);

if(__DEV__) {
  if (module.hot) {
    module.hot.accept('./App', () => {
      ReactDOM.render(
        <AppContainer component={require('./App').default} />,
        rootEl
      );
    });
  }
}
