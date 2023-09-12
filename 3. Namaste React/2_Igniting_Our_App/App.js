/*

<div id="parent">
    <div id="child">
        <h1>Hello From Nested</h1>
    </div>
</div>

*/

// Creating nested html elements using React.createElement()

// const parent = React.createElement(
//   'div',
//   { id: 'parent' },
//   React.createElement(
//     'div',
//     { id: 'child' },
//     React.createElement('h1', {}, 'Hello From Nested')
//   )
// );

/*

<div id="parent">
    <div id="child">
        <h1>Hello From Nested</h1>
        <h2>Hello From Nested again</h2>
    </div>
</div>

*/

// Creating nested html elements for sibling html elements

// const parent = React.createElement(
//   'div',
//   { id: 'parent' },
//   React.createElement('div', { id: 'child' }, [
//     React.createElement('h1', {}, 'Hello From Nested'),
//     React.createElement('h2', {}, 'Hello From Nested again'),
//   ])
// );

/*

<div id="parent">
    <div id="child">
        <h1>Hello From Nested</h1>
        <h2>Hello From Nested again</h2>
    </div>
    <div id="child">
        <h1>Hello From Nested</h1>
        <h2>Hello From Nested again</h2>
    </div>
</div>

*/

// Creating nested HTMl elements for sibling html elements with 2 child divs

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

// const heading = React.createElement(
//   'h1',
//   { id: 'heading' },
//   'Hello World from React'
// );

// console.log(heading); // Object

console.log(parent); // Object

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);
root.render(parent);
