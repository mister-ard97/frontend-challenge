import React from 'react';
import chevrondown from 'assets/images/icon/chevrondown.svg';

const Select = ({
  id,
  key,
  children,
  className,
  style,
  value,
  onChange,
  ...props
}) => {
  return (
    <select
      className={`my-form ${className} my-form-icon`}
      style={{
        ...style,
        width: '100%',
        backgroundImage: `url(${chevrondown})`,
        backgroundSize: '12px',
      }}
      value={value}
      onChange={onChange}
      {...props}
    >
      {children}
    </select>
  );
};

export default Select;
