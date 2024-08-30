import React, { useState } from "react";

const ToggleBtn: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className={`px-2 w-16 h-8 flex items-center bg-black rounded-full p-1 cursor-pointer ${
        isOn ? "justify-end" : "justify-start"
      }`}
      onClick={handleToggle}
    >
      <div
        className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${
          isOn ? "translate-x-1" : "-translate-x-1"
        }`}
      />
    </div>
  );
};

export default ToggleBtn;
