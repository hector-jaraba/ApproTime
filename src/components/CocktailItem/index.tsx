import React from 'react';
import { Link } from "react-router-dom";
import {Cocktail, Ingredient} from '../../types'
const CocktailItem = ({cocktail, isDetail = false}) => (
    <div className="w-80 bg-white flex flex-col items-center rounded-md overflow-hidden">
        <figure className="w-56 h-56 overflow-hidden center mt-4">
            <img src={cocktail.image} alt={cocktail.name} />
        </figure>
        <div className="w-full">
        <h3 className="text-2xl text-indigo-400 text-center my-4">{cocktail.name}</h3>
        {isDetail ? <>
            <div className="mt-4 bg-gray-100 p-4">
                <h4 className="text-xl">Ingredients</h4>
                <ul>
                    {cocktail.ingredients.map((ingredient:Ingredient) => <li key={ingredient.name}>
                        <strong>{ingredient.name}</strong> - {ingredient.measure?.quantity} {ingredient.measure?.unit}</li>)}
                </ul>
            </div>
            <div className="p-4">
                <h4 className="text-xl">Intructions</h4>
                <p>
                    {cocktail.instructions}
                </p>
            </div>
        </> 
        : 
        <Link to={`/cocktail/${cocktail.id}`}>
            <button className="w-full py-4 px-2 bg-indigo-500 text-white font-bold hover:bg-indigo-400 transition duration-500 ease-in-out">
                See Recipe
            </button>
        </Link>
        }
        </div>
    </div>
)
export default CocktailItem