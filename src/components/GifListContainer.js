import React, { useEffect, useState } from 'react';
import GifList from "./GifList";
import GifSearch from './GifSearch';

function GifListContainer() {
    // States
    const [gifs, setGifs] = useState([]);
    const [search ,setSearch] = useState("dogs");

    // Fetch Requests
    // Based on the search state, fetch gifs from the API and set the gifs state to the data key of the response. 
    // URI is encoded to allow multiple word searches
    useEffect(() =>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=pItTz1XVZJqGoTQgF2AzEAyEgj7mvpBI&rating=g`)
        .then((response) => response.json())
        .then((fetchedGifs) => setGifs(fetchedGifs.data));
    }
        ,[search]
    );

    // Event Handlers
    function handleSearchSubmit(searchTerm){
        setSearch(searchTerm);
    }


    return (
        <div style={{display: "flex", justifyContent: "space-around"}}>
            <GifList gifsData={gifs}/>
            <GifSearch onFormSubmit={handleSearchSubmit}/>
        </div>
    )
}

export default GifListContainer;