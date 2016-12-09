import ReactDOM from 'react-dom';
import React from 'react';
import App from 'components/App';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.querySelector('#app'));
});

if (module.hot) {
  module.hot.accept('components/App', (d) => {
    const NextApp = require('components/App').default;
    ReactDOM.render(<NextApp />, document.querySelector('#app'));
  });
}
