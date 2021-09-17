import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CocktailsState } from "../store";
import { requestHandler } from "../helpers";
import { cocktailsService } from "../services";
import { createCocktailsFromServer } from "../models";
import { Cocktail } from "../types";
import CocktailItem from "../components/CocktailItem";

const ApproDetail: React.FC = () => {
  const [favorites, setFavorites] = useState<Cocktail[]>([]);

  const favoritesList = useSelector<CocktailsState, string[]>(
    (state) => state.favorites
  );

  const consumeService = async () => {
    const favoriteCocktails = favoritesList.map(async (id) => {
      const [data] = await requestHandler(() => cocktailsService.getById(id));
      if (data) {
        return createCocktailsFromServer(data);
      }
    });
    const resolvedPromises = await Promise.all(favoriteCocktails);
    const result = resolvedPromises
      .map((item) => item?.[0])
      .filter((item) => typeof item !== "undefined") as Cocktail[];
    setFavorites(result);
  };

  useEffect(() => {
    if (!favorites.length) {
      consumeService();
    }
  }, []);

  const renderFavoriteList = () =>
    favorites.map((cocktail) => (
      <CocktailItem key={cocktail.id} cocktail={cocktail} />
    ));
  const renderEmpty = () => (
    <div className="text-white">
      <h3>Oooh noo your list is empty!</h3>
      <h2>Try to add some cocktails =)</h2>
    </div>
  );

  const renderFavoriteOrEmpty = () =>
    !!favorites.length ? renderFavoriteList() : renderEmpty();

  const render = () => <div>{renderFavoriteOrEmpty()}</div>;

  return render();
};

export default ApproDetail;
