import React from 'react'

export const GifGridItem = ({ id, title, image}) => {

   // console.log(props);

   return (
      <div className="card animate__animated animate__fadeInUp">
         <img src={image} alt={title} />
         <div className="card-meta">
            <h2>{title}</h2>
         </div>
      </div>
   )
}
