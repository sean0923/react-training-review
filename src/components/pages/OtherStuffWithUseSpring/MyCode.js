import React from 'react';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import Button from '../../common/Button';

const MyCode = () => {
  return (
    <div>
      <h1>Color</h1>
      <Button onClick={() => {}}>toggleColor</Button>

      <hr />

      <h1>font size</h1>
      <Button onClick={() => {}}>toggle font size</Button>

      <hr />

      <h1>text position</h1>
      <Button onClick={() => {}}>move text</Button>
    </div>
  );
};

export default MyCode;
