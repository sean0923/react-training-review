import React from 'react';

const element = <h1>Hellow World</h1>;

const SolutionCode = () => {
  const world = 'world';

  return (
    <div>
      <h1>Hellow World</h1>
      {element}
      <h1>Hellow {world}</h1>
      <h2>Hellow world</h2>
      <h3>Hellow World</h3>
      <div>Hellow world</div>

      <h1 style={{ color: 'tomato' }}>Hellow World</h1>
      <h1 style={{ color: 'green', fontSize: '3rem' }}>Hellow World</h1>
    </div>
  );
};

export default SolutionCode;
