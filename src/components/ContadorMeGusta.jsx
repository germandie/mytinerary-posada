import React, { useState } from 'react';

function ContadorMeGusta() {
  const [contador, setContador] = useState(0);

  const handleIncrement = () => {
    setContador(contador + 1);
  };

  return (
    <div className="flex">
      <p onClick={handleIncrement} className="lg:w-8">
      ❤️
      </p>
      <p>{contador}</p>
    </div>
  );
}

export default ContadorMeGusta;
