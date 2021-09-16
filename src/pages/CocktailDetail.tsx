import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import { requestHandler } from "../helpers";
import { cocktailsService } from "../services";
import { createCocktailsFromServer } from "../models";
import CocktailItem from "../components/CocktailItem";
import { RouteWithId } from "../types";

const CocktailDetail = () => {
  const { id } = useParams<RouteWithId>();
  const { cocktails, setCocktails } = useGlobalContext();

  const getCocktail = async () => {
    const [data] = await requestHandler(() => cocktailsService.getById(id));
    if (data) {
      const cocktail = createCocktailsFromServer(data);
      setCocktails(cocktail);
    }
  };

  useEffect(() => {
    getCocktail();
  }, []);

  return (
    <div className="flex justify-center my-4 py-10">
      {cocktails.map((cocktail) => (
        <CocktailItem key={id} cocktail={cocktail} isDetail={true} />
      ))}
    </div>
  );
};

export default CocktailDetail;
