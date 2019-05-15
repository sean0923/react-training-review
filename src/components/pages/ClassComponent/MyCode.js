import React, { Component } from 'react';

import Button from '../../common/Button';

class MyCode extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleName() {}

  makeMeYounger() {}

  render() {
    const name = 'Arthur';
    const buttonText = 'Show my last name';
    const yearOfBirth = 1963;

    return (
      <div>
        <h1>{name}</h1>
        <Button>{buttonText}</Button>

        <hr />

        <h1>{yearOfBirth}</h1>
        <Button>make me younger</Button>
      </div>
    );
  }
}

export default MyCode;
