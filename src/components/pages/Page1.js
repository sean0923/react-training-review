import React from 'react';
import useInput from '../../hooks/useInput';

import Input from './page1/Input';

import { isRequired } from '../../helpers/helperFuncs';

const Page1 = () => {
  const inputProps = useInput({ value: '', label: 'label', errFuncs: [isRequired] });
  const randomProps = useInput({ value: '', label: 'label', errFuncs: [isRequired] });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        inputProps.onBlur();
        randomProps.onBlur();
      }}
    >
      <Input {...inputProps} />
      <Input {...randomProps} />
      <div>Page1</div>
      <div>Page1</div>
      <div>Page1</div>
      <button>submit</button>
    </form>
  );
};

export default Page1;
