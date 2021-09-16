import React from 'react';
import './Tiles.css';  

const Tiles = ({ recipe }) => {

    return (
        <div>
            <img className = "Tile_img" src={recipe["recipe"]["image"]} />
            <p className = "Tile_name">{recipe["recipe"]["label"]}</p>
            
        </div>
    )
}

export default Tiles;
