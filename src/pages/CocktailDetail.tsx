import React, { useEffect } from "react";
import {useParams}  from "react-router-dom";
import {useGlobalContext} from '../store'
import { requestHandler } from '../helpers'
import { CocktailsService } from '../services'
import {createCocktailsFromServer} from '../models'
import CocktailItem from '../components/CocktailItem'

const CocktailDetail = () => {
    let { cocktailId } = useParams();
    const {cocktails, setCocktails} = useGlobalContext();

    const consumeService = async() => {
        const [data] = await requestHandler(() => CocktailsService.getById(cocktailId))
        if(data){
            const cocktail = createCocktailsFromServer(data)
            setCocktails(cocktail)
        }
    }

    useEffect(() => {
        if(!cocktails) {
            consumeService()
        }
    }, [])

    return (
        <div className="flex justify-center my-4 py-10">
            {cocktails?.map(cocktail => 
                <CocktailItem key={cocktailId} cocktail={cocktail} isDetail={true} />
            )}
        </div>  
    )
}

export default CocktailDetail 