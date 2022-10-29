import React from 'react';

const ModalLayout = ({ children }) => {
  return (
    <div className="fixed left-0 top-0 w-[100vw] h-[100vh] flex items-center justify-center z-50 bg-black/60">
      {children}
    </div>
  );
};

export default ModalLayout;
