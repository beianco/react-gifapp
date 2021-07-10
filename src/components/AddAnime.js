import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddAnime = ({ setAnimes }) => {

   const [inputValue, setinputValue] = useState('');

   // cambiamos el value state con un evento
   const handleInputChange = (e) => {
      setinputValue( e.target.value );
   }
   
   const handleSubmit = (e) => {
      e.preventDefault();

      // confirmamos si el input no esta vacio
      if( inputValue.trim().length > 0 ) setAnimes( animes => [...animes, inputValue]);

      // reseteamos el input
      setinputValue('');
   }

   return (
      <form onSubmit={ handleSubmit }>
         <input type="text" value={ inputValue } onChange={ handleInputChange } />
      </form>
   )
}

AddAnime.propTypes = {
   setAnimes: PropTypes.func.isRequired
}

