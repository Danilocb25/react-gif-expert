
export const getGifs = async( category ) =>{
        const url = `https://api.giphy.com/v1/gifs/search?api_key=sFAtANuMULh2cYzkJHUoRQOHDH9uL3PW&q=${category}&limit=10`;
        const response = await fetch(url);
        const {data} = await response.json();
      
      
        const gifs = data.map(img =>({
          id: img.id,
          title: img.title,
          url: img.images.downsized_medium.url,
        }))
      
        console.log(gifs)
        return gifs;
      
      }
      

   