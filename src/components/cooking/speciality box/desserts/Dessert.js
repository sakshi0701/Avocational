import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import Data from "./desserts.json";
import '../pages.css';
import DessertList from './DessertList';
import Speciality from '../Speciality';

const Dessert = () => {

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
                            <DessertList
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

export default Dessert;
