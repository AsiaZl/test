import { createContext, useState, useEffect, useRef } from "react";

const FavoriteContext = createContext({
  favorites: [],
  addFavorite: (favoriteJoke) => {},
  removeFavorite: (id) => {},
  itemIsFavorite: (id) => {},
});
const initialFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

export function FavoritesContextProvider(props) {
  const [favorites, setFavorites] = useState(initialFavorites);
  const isInitialState = useRef(true);

  useEffect(() => {
    if (isInitialState.current) {
      isInitialState.current = false;
    } else {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  function addFavorites(favoriteJoke) {
    const favoriteJokes = [...favorites, favoriteJoke];
    setFavorites(favoriteJokes);
  }

  function removeFavorite(id) {
    const favoriteJokes = favorites.filter((joke) => joke.id !== id);
    setFavorites(favoriteJokes);
  }

  function itemIsFavorite(id) {
    return favorites.some((joke) => joke.id === id);
  }
  const context = {
    favorites: favorites,
    addFavorite: addFavorites,
    removeFavorite: removeFavorite,
    itemIsFavorite: itemIsFavorite,
  };
  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
}
export default FavoriteContext;
