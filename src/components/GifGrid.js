import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ anime }) => {

   const { data:images, loading } = useFetchGifs(anime);

   // useEffect permite ejecutar codigo de manera condicional, de esta forma le decimos a react que ejecute la funcion una sola vez al renderizar el componente
   // useEffect(() => {
   //    getGifs(anime).then(setImages);
   // }, [anime]);

   return (
      <>
         <h3 className="heading">{anime}</h3>

         {loading && <p>Loading...</p>}

         <div className="card-grid">
            {
               images.map(img => (
                  <GifGridItem key={img.id} {...img} />
               ))
            }
         </div>
      </>
   )
}
