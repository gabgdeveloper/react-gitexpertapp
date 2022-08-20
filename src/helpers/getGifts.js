import React, {} from 'react';



export  const getGifs = async ( category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category) }&limit=10&api_key=9SPjOm8Z8x8Rn7PlcbhtbYx9tmJb59V7` // api request with limin = 10 and paramenter for search
    const resp = await  fetch( url );
    // const  data  = await  resp.json(); load al data from fech in data
    const { data } = await  resp.json(); // use destructuring only load de data for all info sent in fech

    // console.log(data);

    const gifs = data.map( img => {
        return{
            id : img.id,
            title : img.title,
            url : img.images?.downsized_medium.url

        }
    })

    return gifs;

}
