import React, { useState } from 'react';
import { useSelector } from 'react-redux'; 
import Swal from "sweetalert2";
function ContadorMeGusta() {
  const [contador, setContador] = useState(0);

  
  const mail = useSelector((state) => state.users.user?.mail);

  
  const handleIncrement = () => {
    
    if (mail) {
      setContador(contador + 1);
    } else {
      
      Swal.fire({
        icon: "error",
        title: "Sign in to like please!",
      });
    }
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

