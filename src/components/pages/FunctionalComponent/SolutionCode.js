import React from 'react';

import userOneData from './userOneData.json';

const GeneralInfo = ({ name, username, email, phone, website }) => {
  return (
    <div>
      <hr />
      <h3>General Info</h3>
      <hr />

      <ul>
        <li>{`name: ${name}`}</li>
        <li>{`username: ${username}`}</li>
        <li>{`email: ${email}`}</li>
        <li>{`phone: ${phone}`}</li>
        <li>{`website: ${website}`}</li>
      </ul>
    </div>
  );
};

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

const SolutionCode = () => {
  const { name, username, email, address, phone, website } = userOneData;

  return (
    <div>
      <h2>User Info</h2>

      <GeneralInfo name={name} username={username} email={email} phone={phone} website={website} />
      <Address address={address} />
    </div>
  );
};

export default SolutionCode;
