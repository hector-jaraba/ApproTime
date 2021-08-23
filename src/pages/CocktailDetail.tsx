import React from "react";
import {useParams}  from "react-router-dom";
import {useGlobalContext} from '../store'
import CocktailItem from '../components/CocktailItem'

const CocktailDetail = () => {
    let { cocktailId } = useParams();
    const {cocktails} = useGlobalContext()
    console.log(cocktails)

    return (
        <div className="flex justify-center my-4">
            {cocktails?.map(cocktail => 
                <CocktailItem key={cocktailId} cocktail={cocktail} isDetail={true} />
            )}
        </div>  
    )
}

export default CocktailDetail 