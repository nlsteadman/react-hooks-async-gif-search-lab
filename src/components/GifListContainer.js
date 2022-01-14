import React, {useEffect, useState} from "react"
import GifList from "./GifList"
import GifSearch from "./GifSearch"

function GifListContainer() {
    const [gifs, setGifs] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
            .then(r => r.json())
            .then(({data}) => {
                const gifCard = data.map((gif) => ({url: gif.images.original.url}));
                setGifs(gifCard);
            });
    }, [query]);

    return (
        <div style={{ display: "flex" }}>
            <GifList gifs={gifs} />
            <GifSearch onSubmit={setQuery} />
        </div>
    )
}



export default GifListContainer;