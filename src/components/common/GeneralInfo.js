import React from 'react';

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
export default GeneralInfo;
