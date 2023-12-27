import React from 'react';

const Button = ({ type, text, primary, ...rest }) => {
  const primaryClass = primary
    ? 'text-white bg-customPink hover:bg-brightness-75 shadow-sm'
    : 'text-black border border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black shadow-sm';

  const classes = `box-border text-sm p-3 font-bold rounded-sm px-[1.5em] py-[.7em] ${primaryClass}`;

  return (
    <button type={type} className={classes} {...rest}>
      {text}
    </button>
  );
};

export default Button;
