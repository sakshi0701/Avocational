import React from 'react'
import "./display.css"

const Display = ({ display, textFormat }) => {

    return (
        <div>
            <div className="card card-content">
                <div className="imgTshirt text-center">
                    <img className="img-responsive"
                        src={`https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/${display.tshirtColor}`} alt="img-Tshirt" />
                </div>
            </div>
            <div className="picText text-center">
                <div className="upperText">
                    <p style={{ fontSize: textFormat, color: display.textColor }}>{display.upperText}</p>
                </div>
                <img src={`${display.url}` || "http://via.placeholder.com/400x300"} alt="img-text" />
                <div className="lowerText">
                    <p style={{ fontSize: textFormat, color: display.textColor }}>{display.lowerText}</p>
                </div>
            </div>
        </div>
    )
}

export default Display;
