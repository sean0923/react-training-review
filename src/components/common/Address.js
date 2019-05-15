import React from 'react';

const Address = ({ address }) => {
  const { street, suite, city, zipcode } = address;
  return (
    <div>
      <hr />
      <h3>Address</h3>
      <hr />

      <ul>
        <li>{`street: ${street}`}</li>
        <li>{`suite: ${suite}`}</li>
        <li>{`city: ${city}`}</li>
        <li>{`zipcode: ${zipcode}`}</li>
      </ul>
    </div>
  );
};

export default Address;
