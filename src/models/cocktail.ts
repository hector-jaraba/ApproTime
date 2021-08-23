import { CocktailsFromServer, CocktailFromServer, Cocktail, Ingredient, Measure } from "../types"

export const createMeasure = (measure: string): Measure => {
    const measureDecompose = measure.split(' ')

    return {
        quantity: parseInt(measureDecompose[0]),
        unit: measureDecompose[1]
    }
    
}

export const createIngredients = (cocktail: CocktailFromServer) : Ingredient[] => {
    const totalIngredients = 15
    const ingredients = []
    for(let i = 1; i<= totalIngredients; i++) {
        const name =  cocktail[`strIngredient${i}`];
        const measureServer = cocktail[`strMeasure${i}`]
        if(name) {
            ingredients.push({
                name,
                measure: measureServer ? createMeasure(measureServer) : undefined 
            })
        }
        
    }
    return ingredients;
}

export const createCocktailFromServer = (cocktail: CocktailFromServer):Cocktail => ({
    id: cocktail.idDrink,
    name: cocktail.strDrink,
    image: cocktail.strDrinkThumb,
    ingredients: createIngredients(cocktail),
    instructions: cocktail.strInstructions,
    glass: cocktail.strGlass,
    isAlcoholic: cocktail.strAlcoholic === "Alcoholic"
})

export const createCocktailsFromServer = (cocktails: CocktailsFromServer): Cocktail[] => cocktails.drinks.map(createCocktailFromServer)