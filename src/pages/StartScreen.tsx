import React, {useState, useEffect} from 'react'
import { useGlobalContext } from '../store'
import { requestHandler } from '../helpers'
import { CocktailsService } from '../services'
import {createCocktailsFromServer} from '../models'
import {Cocktail} from '../types'
import CocktailItem from '../components/CocktailItem'
const StartScreen = () =>{
    const [cocktails, setCocktails] = useState<Cocktail[]>()
    const consumeService = async() => {
        const [data] = await requestHandler(CocktailsService.getRandom)
        if(data){
            const cocktail = createCocktailsFromServer(data)
            setCocktails(cocktail)
        }
    }

    const handleRefresh = () => {
        consumeService()
    }

    useEffect(() => {
        consumeService()
    }, [])
    return (
        <div className="h-full flex flex-col">
        <h1 className="text-xl my-4 text-purple-50 text-center">This is RANDOM coktail</h1>
        <div className="flex justify-center">
            {cocktails?.map(cocktail => (
                <CocktailItem key={cocktail.id} cocktail={cocktail} />
            ))}
        </div>
        <button className="px-4 py-4 text-indigo-200 bg-gray-900 absolute bottom-0 left-0 w-full" onClick={handleRefresh}>
            Give me another drink! 🍹🧉🍸 
        </button>
        </div>
    )
} 

export default StartScreen