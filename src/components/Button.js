import React from 'react';

const Button = ({ type = '', value = '', className = '', ...props }) => {
  return (
    <button type="button" className={`btn btn-${type} ${className}`} {...props}>
      {value}
    </button>
  );
};

export default Button;
