import React from 'react';

const InputField = ({ type, field, value, onChange, name, register=(name) => ({}), ...props }) => {
  return (
    <div className="py-2 px-3 flex flex-col w-[100%] bg-mainCream rounded-md">
      <p className="text-sm text-mainPurple font-bold ">{field}</p>
      <input
        {...register(name)}
        name={name}
        value={value}
        onChange={onChange}
        className="input"
        type={type}
        required
      />
    </div>
  );
};

export default InputField;
