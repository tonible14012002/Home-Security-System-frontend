import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center ">
      {children}
    </div>
  );
};

export default AuthLayout;
