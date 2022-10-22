import React from 'react';

const Button = ({ type, primary, text, onClick }) => {
  return (
    <button
      className={`p-5 withHover text-center w-[100%] 
       font-bold rounded-md text-xl ${
         primary ? 'bg-mainBrown text-mainPurple' : 'bg-mainBlue text-mainCream'
       }`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
