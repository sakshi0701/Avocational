import React from 'react'
import './display.css'

const urlImg = "https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/";

const Setting = ({ color, upperText, lowerText, uploadImage, textSize, textColor, saveDesign }) => {
    return (
        <div className="card bg-light container">
            <h3 className="text-center">Settings</h3>
            <h4>Change t-Shirt Color</h4>
            <div className="tshirt-color">
                <img onClick={color} src={`${urlImg}white.png`} alt="white tshirt" id="white" />
                <img onClick={color} src={`${urlImg}black.png`} alt="black tshirt" id="black" />
                <img onClick={color} src={`${urlImg}grey.png`} alt="gray tshirt" id="grey" />
                <img onClick={color} src={`${urlImg}red.png`} alt="red tshirt" id="red" />
                <img onClick={color} src={`${urlImg}blue.png`} alt="blue tshirt" id="blue" />
            </div>
            <hr />
            <h4>Write Text</h4>
            <input onChange={upperText} type="text" className="form-control form-control-sm mb-2" placeholder="Upper Text" />
            <input onChange={lowerText} type="text" className="form-control form-control-sm" placeholder="Lower Text" />
            <hr />
            <h4>Upload Image</h4>
            <div className="form-group">
                <input onChange={uploadImage} type="file" className="form-control-file mb-2" />
            </div>
            <hr />
            <h4>Text Size</h4>
            <input onChange={textSize} type="range" min="22" max="52" />
            <hr />
            <h4>Text Color</h4>
            <select onChange={textColor} className="form-control form-control-sm mb-2">
                <option>White</option>
                <option>Black</option>
                <option>Gray</option>
                <option>Red</option>
                <option>Blue</option>
            </select>
            <hr />
            <button id="saveDesign" onClick={saveDesign} className="btn btn-info btn-sm mb-2">
                Save
            </button>
        </div>
    )
}

export default Setting;
