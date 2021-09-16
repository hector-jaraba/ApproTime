import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import { requestHandler } from "../helpers";
import { cocktailsService } from "../services";
import { createCocktailsFromServer } from "../models";
import CocktailItem from "../components/CocktailItem";
const StartScreen = () => {
  const { cocktails, setCocktails } = useGlobalContext();
  const consumeService = async () => {
    const [data] = await requestHandler(cocktailsService.getRandom);
    if (data) {
      const cocktail = createCocktailsFromServer(data);
      setCocktails(cocktail);
    }
  };

  const handleRefresh = () => {
    consumeService();
  };

  useEffect(() => {
    consumeService();
  }, []);
  return (
    <div className="h-full flex flex-col">
      <h1 className="text-xl my-4 text-purple-50 text-center">
        This is a RANDOM cocktail
      </h1>
      <div className="flex justify-center my-4">
        {cocktails?.map((cocktail) => (
          <CocktailItem key={cocktail.id} cocktail={cocktail} />
        ))}
      </div>
      <div className="relative pt-14">
        <button
          className="px-4 py-4 text-indigo-200 bg-gray-900 fixed bottom-0 left-0 w-full"
          onClick={handleRefresh}
        >
          Give me another drink! 🍹🧉🍸
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
