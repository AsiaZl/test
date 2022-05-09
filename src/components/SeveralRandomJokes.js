import { api } from "../api";
import { useContext, useState } from "react";
import { CardText, Spinner } from "reactstrap";
import { SeveralRandomJokesForm } from "./SeveralRandomJokesForm";
import { Card } from "./Card";
import { Button } from "./Button";
import FavoriteContext from "../store/favorites-context";

export function SeveralRandomJokes() {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const favoritesCtx = useContext(FavoriteContext);

  function addToFavorite(joke) {
    favoritesCtx.addFavorite(joke);
  }

  function deleteFromFav(id) {
    favoritesCtx.removeFavorite(id);
  }

  function submitChoise(e) {
    e.preventDefault();
    setIsLoading(true);
    Promise.all(
      Array(Number(e.target.numberOfJokesInput.value))
        .fill("/random")
        .map((endpoint) => api.get(endpoint))
    )
      .then((response) => {
        setJokes(response.map((res) => res.data));
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <SeveralRandomJokesForm onSubmitChoise={submitChoise} />
      {isLoading ? (
        <Spinner />
      ) : (
        jokes.map((joke) => (
          <Card key={joke.id}>
            <CardText>{joke.value}</CardText>
            <Button
              onClick={
                favoritesCtx.itemIsFavorite(joke.id)
                  ? () => deleteFromFav(joke.id)
                  : () => addToFavorite(joke)
              }
            >
              {favoritesCtx.itemIsFavorite(joke.id)
                ? "Remove from the favorites"
                : "Add to favorites"}
            </Button>
          </Card>
        ))
      )}
    </div>
  );
}
