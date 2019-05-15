import React, { Component } from 'react';

import Button from '../../common/Button';

class SolutionCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Arthur',
      buttonText: 'Show my last name',
      yearOfBirth: 1963,
    };
  }

  toggleName() {
    if (this.state.name === 'Arthur') {
      this.setState({ name: 'Davis', buttonText: 'Show my first name' });
    } else {
      this.setState({ name: 'Arthur', buttonText: 'Show my last name' });
    }
  }

  increaseYear() {
    this.setState({ yearOfBirth: this.state.yearOfBirth + 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <Button onClick={() => this.toggleName()}>{this.state.buttonText}</Button>

        <hr />

        <h1>{this.state.yearOfBirth}</h1>
        <Button onClick={() => this.increaseYear()}>make me younger</Button>
      </div>
    );
  }
}

export default SolutionCode;
