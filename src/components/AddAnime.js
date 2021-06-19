import React, { useState } from 'react';

export const AddAnime = ({ setAnimes }) => {

   const [inputValue, setinputValue] = useState('Boku no hero');

   // cambiamos el state con un evento
   const handleInputChange = (e) => {
      setinputValue( e.target.value );
   }
   
   const handleSubmit = (e) => {
      e.preventDefault();

      if( inputValue.trim().length > 0 ) setAnimes( animes => [...animes, inputValue]);
      setinputValue('');
   }

   return (
      <form onSubmit={ handleSubmit }>
         <input type="text" value={ inputValue } onChange={ handleInputChange } />
      </form>
   )
}
