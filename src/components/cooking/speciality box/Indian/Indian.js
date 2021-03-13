import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import Data from "./Indian.json";
import '../pages.css';
import IndianList from './IndianList';
import Speciality from '../Speciality';

const Indian = () => {

    return (
        <>
            <div className="w-100 App">
                <div className="special">
                    <h4><a href="/cook">Recipe Home Page</a></h4>
                    <Speciality />
                </div>

                <Router>
                    <div className="type">
                        {Data.map(postDetail => (
                            <IndianList
                                key={postDetail.id}
                                title={postDetail.title}
                                image={postDetail.image}
                                ingredients={postDetail.ingredients}
                                directions={postDetail.directions}
                                url={postDetail.url}
                            />
                        ))}
                    </div>
                </Router>
            </div>
        </>
    )
}

export default Indian;
