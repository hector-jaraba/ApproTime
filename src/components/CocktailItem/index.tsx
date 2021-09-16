import React, { useCallback, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { COCKTAIL_DETAIL } from "../../router";
import { Cocktail, Ingredient } from "../../types";
import { ADD_FAVORITE, REMOVE_FAVORITE, CocktailsState } from '../../store'
import { useDispatch, useSelector} from 'react-redux'

interface Props {
  cocktail: Cocktail;
  isDetail?: boolean;
}

const CocktailItem: React.FC<Props> = ({ cocktail, isDetail = false }) => {

  const dispatch = useDispatch()
  const favoritesList = useSelector<CocktailsState, string[]>(state => state.favorites)

  const isFavorite = favoritesList.includes(cocktail.id)
  const favorite = useRef(isFavorite)

  const handleFavorite = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement
    favorite.current = !favorite.current
    if (favorite.current) {
      // target.classList.add('text-red-500')
      dispatch({ type: ADD_FAVORITE, payload: cocktail.id })
    }
    else {
      // target.classList.remove('text-red-500')
      dispatch({ type: REMOVE_FAVORITE, payload: cocktail.id })
    }
    
  }


  const renderDetail = useCallback(
    () => (
      <>
        <div className="mt-4 bg-gray-100 p-4">
          <h4 className="text-xl">Ingredients</h4>
          <ul>
            {cocktail.ingredients?.map((ingredient: Ingredient) => (
              <li key={ingredient.name}>
                <strong>{ingredient.name}</strong> -{" "}
                {ingredient.measure?.quantity} {ingredient.measure?.unit}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4">
          <h4 className="text-xl">Intructions</h4>
          <p>{cocktail.instructions}</p>
        </div>
      </>
    ),
    [cocktail]
  );

  const renderLink = useCallback(() => {
    const linkTo = COCKTAIL_DETAIL.replace(":id", cocktail.id);
    return (
      <Link to={linkTo}>
        <button className="w-full py-4 px-2 bg-indigo-500 text-white font-bold hover:bg-indigo-400 transition duration-500 ease-in-out">
          See Recipe
        </button>
      </Link>
    );
  }, [cocktail]);


  const render = isDetail ? renderDetail : renderLink;

  return (
    <div className="relative w-80 bg-white flex flex-col items-center rounded-md overflow-hidden mt-4">
      <div className={`absolute favorite right-0 top-0 w-6 fill-current cursor-pointer mt-2 mr-2 ${favorite.current ? 'text-red-500': ''}`} onClick={handleFavorite}>
        <svg className="heart" viewBox="0 0 32 29.6">
          <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
          c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
        </svg>
      </div>
      <figure className="w-56 h-56 overflow-hidden center mt-4">
        <img src={cocktail.image} alt={cocktail.name} />
      </figure>
      <div className="w-full">
        <h3 className="text-2xl text-indigo-400 text-center my-4">
          {cocktail.name}
        </h3>
        {render()}
      </div>
    </div>
  );
};
export default CocktailItem;
