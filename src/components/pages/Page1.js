import React from 'react';
import useInput from '../../hooks/useInput';

import Input from './page1/Input';

import { isRequired } from '../../helpers/helperFuncs';

const Page1 = () => {
  const inputProps = useInput({ value: '', label: 'label', errFuncs: [isRequired] });
  const randomProps = useInput({ value: '', label: 'label', errFuncs: [isRequired] });

  return (
    <div>
      <Input {...inputProps} />
      <Input {...randomProps} />
      <div>Page1</div>
      <div>Page1</div>
      <div>Page1</div>
    </div>
  );
};

export default Page1;
