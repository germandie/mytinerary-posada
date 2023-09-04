import React, { useState } from "react";

function ButtonCard() {
  const [isUnderConstruction, setIsUnderConstruction] = useState(false);
  const [buttonText, setButtonText] = useState('View More');

  const handleClick = () => {
    setIsUnderConstruction(!isUnderConstruction);
    setButtonText(isUnderConstruction ? 'View More' : 'Hide');
  };

  return (
    <div className="flex flex-col justify-center items-center
    md:flex md:flex-col md:justify-center md:items-center 
    lg:flex lg:flex-col lg:justify-center lg:items-center">
      <button
        onClick={handleClick}
        className="w-auto h-auto px-8 bg-[#4F46E5] hover:bg-[#473fde] text-white text-lg font-semibold rounded-md mt-3 ml-5 
        md:w-40 md:h-auto  
        lg:w-[15vw] lg:h-[3vw] lg:m-auto lg:mt-4
        xl: "
      >
        <span className="text-[16px] md:text-sm">{buttonText}</span>
      </button>
      {isUnderConstruction && <p className="text-red-500 mt-2">Under Construction</p>}
    </div>
  );
}

export default ButtonCard;