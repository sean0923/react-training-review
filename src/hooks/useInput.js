import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'RECEIVE_USER_TYPING':
      return { ...state, value: action.payload };

    case 'IF_ERROR_THEN_DISPLAY':
      return { ...state, error: getErrMessage(state) };

    case 'REMOVE_ERR_MESSAGE':
      return { ...state, error: '' };

    default:
      return state;
  }
};

const useInput = ({
  value = '',
  label = 'default label',
  type = 'text',
  errFuncs = [],
  error = '',
} = {}) => {
  const [state, dispatch] = useReducer(reducer, {
    value,
    label,
    type,
    error,
    errFuncs,
  });

  return errFuncs.length === 0
    ? {
        value: state.value,
        label: state.label,
        type: state.type,
        onChange: (e) => dispatch({ type: 'RECEIVE_USER_TYPING', payload: e.target.value }),
      }
    : {
        value: state.value,
        label: state.label,
        type: state.type,
        error: state.error,
        onChange: (e) => dispatch({ type: 'RECEIVE_USER_TYPING', payload: e.target.value }),
        onBlur: () => dispatch({ type: 'IF_ERROR_THEN_DISPLAY' }),
        onFocus: () => dispatch({ type: 'REMOVE_ERR_MESSAGE' }),
      };
};

const getErrMessage = (state) => {
  const { errFuncs, value } = state;

  for (let i = 0; i < state.errFuncs.length; i++) {
    const errFunc = errFuncs[i];
    const error = errFunc(value);
    if (error.length > 0) {
      return error;
    }
  }

  return '';
};

export default useInput;
