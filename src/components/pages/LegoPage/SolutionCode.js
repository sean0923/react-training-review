import React from 'react';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import Lego from './Lego';

const SolutionCode = () => {
  return (
    <div>
      <Lego color="pink">pink</Lego>
      <Lego color="blue">blue</Lego>
      <Lego color="green">green</Lego>
      <Lego color="red">red</Lego>
      <Lego color="var(--color-black)">Put anything you want</Lego>
    </div>
  );
};

export default SolutionCode;
