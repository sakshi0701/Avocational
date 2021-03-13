import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom"
import Recipe from "../recipe/Recipe";
import "./dashboard.css";
import Speciality from "../speciality box/Speciality";
require('dotenv').config()

export default function Recipes() {

  const [Load, setLoad] = useState(false);

  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;

  const [recipies, setRecipies] = useState([]);

  const [search, setSearch] = useState('');

  const [query, setQuery] = useState('apple')

  useEffect(() => {
    getRecipies();
    // eslint-disable-next-line
  }, [query]);                 

  const getRecipies = async () => {
    setLoad(!Load);
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipies(data.hits);     
    setLoad(false);
  };

  const updateSearch = e => {
    setSearch(e.target.value); 
  }

  const getSearch = e => {
    e.preventDefault();         
    setQuery(search);           
    setSearch('');            
  }

  return (
    <>
      <div className="w-100 App">
        <Router>
          <div className="special">
            <Speciality />
          </div>

          <form onSubmit={getSearch} className="mt-10 search-form">
            <input className="search-bar" placeholder='Search Here' type="text" value={search} onChange={updateSearch} />
            <button className="search-button" type='submit'>Search</button>
          </form>

          <div className="load">
          {Load && (
                <div className="d-flex justify-content-center text-center spinner-border text-info" role="status">
                    {/* <p class="visually-hidden"></p> */}
                </div>
          )}
          </div>

          <div className="recipes">
            {recipies.map(recipe => (
              <Recipe
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
              />
            ))}
          </div>
        </Router>
      </div>
    </>
  )
}