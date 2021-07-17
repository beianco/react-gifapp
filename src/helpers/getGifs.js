
export const getGifs = async (anime) => {

   const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(anime)}&limit=10&api_key=m2ixS1dodk0KyJCbLgoI5uaKfwMaVhgK`;
   const resp = await fetch(url);
   const { data } = await resp.json();

   // extraemos las propiedades importantes de la respuesta api
   const gifs = data.map(img => {
      return {
         id: img.id,
         title: img.title,
         url: img.url,
         image: img.images?.downsized_medium.url
      }
   })

   return gifs;
}
