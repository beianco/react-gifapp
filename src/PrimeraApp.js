import React from 'react';

// FC
const PrimeraApp = ({ saludo = "Hola Mundo!" }) => {

   // console.log(props);

   return (
      <>
         <h1>{ saludo }</h1>
         <p>Mi primer aplicacion</p>
      </>
   );
}

export default PrimeraApp;