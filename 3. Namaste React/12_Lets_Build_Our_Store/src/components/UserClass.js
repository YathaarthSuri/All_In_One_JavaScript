import React from 'react';
import NameContext from '../utils/NameContext';

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // console.log('class', props);

    this.state = {
      //   count: 0,
      //   count2: 2,
      userInfo: {
        name: 'Dummy',
        location: 'default',
      },
    };

    console.log(this.props.name + 'Child Constructor');
  }

  async componentDidMount() {
    console.log(this.props.name + 'Child Component did mount');

    // API Call

    const data = await fetch('https://api.github.com/users/akshaymarch7');
    const json = await data.json();

    // console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log(this.props.name + 'Child component did update');
  }

  componentWillUnmount() {
    console.log(this.props.name + 'Child component unmounted');
  }

  render() {
    console.log(this.props.name + 'Child Render');

    // const { name, location } = this.props;
    // const { count } = this.state;

    return (
      <div className='user-card'>
        {/* <h1>Count: {this.state.count}</h1> */}
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        {/* <h1>Count2: {this.state.count2}</h1> */}
        <h2>Name: {this.state.userInfo.name}</h2>
        <div>
          <NameContext.Consumer>
            {(data) => console.log(data)}
          </NameContext.Consumer>
        </div>
        <h3>Location: {this.state.userInfo.location}</h3>
        <img src={this.state.userInfo.avatar_url} />
        <h4>Contact: @YathaarthSuri</h4>
      </div>
    );
  }
}

export default UserClass;
