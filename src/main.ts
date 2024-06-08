import ReactDOM from 'react-dom/client';

import React from 'react';

import App from './App';

function main() {
  const container = document.getElementById('root');
  if (!container) {
    return;
  }

  const root = ReactDOM.createRoot(container);
  const element = React.createElement(App, null, null);
  root.render(element);
}

main();