import React from 'react';
import ReactDOM from 'react-dom/client';

// Creating h1 tag using simple React.createElement

// React.createElement => ReactElement (JS Object) => HTMLElement (render)

// const heading = React.createElement(
//   'h1',
//   { id: 'heading' },
//   'Hello using React.createElement'
// );

// Creating h1 tag using JSX

// JSX (babel transpiles it to...) => React.createElement => ReactElement (JS Object) => HTMLElement (render)

// React Element

// const heading = <h1 className='heading'>Hello using JSX</h1>;

const heading = (
  <div>
    <h1 className='heading'>Hello using JSX</h1>
  </div>
);

// React Component (Functional Component)

// const HeadingComponent = () => {
//   return (
//     <div>
//       <h1 className='heading'>Hello from React Functional Component</h1>
//     </div>
//   );
// };

// Above can also be written like:

const HeadingComponent0 = function () {
  return (
    <div>
      <h1 className='heading'>Hello from React Functional Component</h1>
    </div>
  );
};

// Above can also be written like:

const HeadingComponent1 = () => (
  <div>
    <h1 className='heading'>Hello from React Functional Component</h1>
  </div>
);

// To use above component in another component we can simply insert it withing tags

// Component Composition

const Title = () => (
  <div>
    <HeadingComponent1 />
    {/* <HeadingComponent1></HeadingComponent1> */}
    {/* {HeadingComponent1()} */}
    <h2 className='heading'>Hello I am Title</h2>
  </div>
);

// We can write any piece of JavaScript code inside JSX using {} (Curly Braces)

const number = 1000;

// We can include React elements inside our React Components as React elements are just JS variables

const TitleVariable = (
  <div>
    <h2 className='heading'>Hello I am Title</h2>
  </div>
);

const Title1 = () => (
  <div>
    <h3>{number}</h3>
    {TitleVariable}
    <h2 className='heading'>Hello I am Title</h2>
  </div>
);

// We can include React components inside our React Elements

// const Title2 = () => (
//   <div>
//     <h2 className='heading'>Hello I am Title</h2>
//   </div>
// );

// const titleVariable1 = (
//   <div>
//     <h2 className='heading'>Hello I am Title</h2>
//     <Title2 />
//   </div>
// );

// We can include React elements inside our React Elements

// const title3 = (
//   <div>
//     <h2 className='heading'>Hello I am Title</h2>
//   </div>
// );

// const title4 = (
//   <div>
//     <h2 className='heading'>Hello I am Title</h2>
//     {title3}
//   </div>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);

// Rendering a React component

root.render(<Title />);
