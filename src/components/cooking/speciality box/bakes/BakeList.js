import React from 'react';
const BakeList = ({title, image, ingredients,directions,url}) => {
    return (
        <div className="main">
            <h2>{title}</h2>
            <img className="image" src={image} alt=""/>
            <h3>Ingredients:</h3>
            <h4>{ingredients}</h4>
            <h3>Directions:</h3>
            <h4>{directions}</h4>
            <h6>For more information: {url}</h6>
        </div>
    )
}

export default BakeList;
