import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'Hello From Nested'),
    React.createElement('h2', {}, 'Hello From Nested again'),
  ]),
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'Hello From Nested'),
    React.createElement('h2', {}, 'Hello From Nested again'),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
