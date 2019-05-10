import React from 'react';

export const Input = ({ value, label, type, error, id, onChange, onBlur, onFocus, ...rest }) => {
  return (
    <input
      {...rest}
      to={id || label}
      type="text"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
};

export const Label = ({ htmlFor, id, label, ...rest }) => {
  return (
    <label {...rest} htmlFor={htmlFor || id || label}>
      {label}
    </label>
  );
};

const InputGroup = ({ value, label, type, error, id, onChange, onBlur, onFocus, ...rest }) => {
  return (
    <div {...rest}>
      <Label htmlFor={id || label} label={label} />
      <Input
        to={id || label}
        type="text"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default InputGroup;
