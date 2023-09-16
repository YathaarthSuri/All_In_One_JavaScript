import User from './User';
import UserClass from './UserClass';
import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log('Parent Constructor');
    // this.state = {
    //   count: 0,
    // };
  }

  componentDidMount() {
    // console.log('Parent Component did mount');
    // this.setState({
    //   count: 1,
    // });
  }

  componentDidUpdate() {
    // console.log('Parent component did update');
  }

  componentWillUnmount() {
    // console.log('Parent component unmounted');
  }

  render() {
    // console.log('Parent Render');

    return (
      <div>
        <h1>About</h1>
        <h2>This is About page</h2>
        <UserClass name='First (class)' location='Delhi (class)' />
        {/* <UserClass name='Second (class)' location='Delhi (class)' /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is About page</h2>
//       <User name='Yathaarth (function)' />
//       <UserClass name='Yathaarth (class)' location='Delhi (class)' />
//     </div>
//   );
// };

export default About;
