import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (anime) => {
  
   const [state, setState] = useState({
      data: [],
      loading: true
   });

   // hacemos un use effect para correr la funcion getGifs solo cuando la propiedad anime sea cambiada
   useEffect(() => {

      // traemos los gifs y usamos el setState para guardarlos
      getGifs(anime).then( imgs => {
         setState({
            data: imgs,
            loading: false
         });
      });

   }, [anime]);

   return state; // { data: [], loading: true }
}
