import React, { useState } from 'react';
import { AddAnime } from './components/AddAnime';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

   // creamos el state para la lista
   const [animes, setAnimes] = useState(['Kimetsu no jaiba']);

   // const handleAdd = () => {
   //    // setAnimes([...animes, 'One punch']);
   //    setAnimes( animesCall => [...animesCall, 'One punch'] );
   // }

   return (
      <>
         <h2 className="logo">GifExpertApp</h2>
         <AddAnime setAnimes={setAnimes} />
         
         {
            animes.map(item => (
               <GifGrid anime={item} key={item} />
            ))
         }
      </>
   )
}
