import React, { useState } from 'react';
import { AddAnime } from './components/AddAnime';

export const GifExpertApp = () => {

   const [animes, setAnimes] = useState(['Naruto', 'Kimetsu no jaiba', 'Fairy tail', 'Attack on titan']);

   const handleAdd = () => {
      // setAnimes([...animes, 'One punch']);
      setAnimes( a => [...animes, 'One punch'] );
   }

   return (
      <>
         <h2>GifExpertApp</h2>
         <AddAnime setAnimes={ setAnimes } />
         <hr />

         {
            animes.map( item => {
               return (
                  <li key={ item }>{ item }</li>
               )
            })
         }
      </>
   )
}
