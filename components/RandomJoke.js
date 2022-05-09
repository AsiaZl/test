import { useEffect, useState, useContext } from "react";
import { Row, Card, CardTitle, CardText, Spinner } from "reactstrap";
import { api } from "../api";
import { Button } from "./Button";
import { SeveralRandomJokes } from "./SeveralRandomJokes";
import FavoriteContext from "../store/favorites-context";

export function RandomJoke() {
  const [randomJoke, setRandomJoke] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [severalJokes, setSeveralJokes] = useState(false);
  const [buttonText, setButtonText] = useState("Get more random jokes");

  const favoritesCtx = useContext(FavoriteContext);

  function addComponent() {
    setSeveralJokes((severalJokes) => !severalJokes);
    if (severalJokes) {
      setButtonText("Get more random jokes");
    } else {
      setButtonText("Hide jokes");
    }
  }

  function getRandomJoke() {
    setIsLoading(true);
    api
      .get("/random")
      .then((res) => {
        setRandomJoke(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }

  useEffect(() => {
    getRandomJoke();
  }, []);

  function addToFavorite(joke) {
    favoritesCtx.addFavorite(joke);
  }

  function deleteFromFav(id) {
    favoritesCtx.removeFavorite(id);
  }

  if (error) {
    return <p>Ooops.{error.message}</p>;
  }

  return (
    <div>
      <Row>
        {isLoading ? (
          <Spinner />
        ) : (
          <Card
            body
            className="text-center"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "#0d6efd",
            }}
          >
            <CardTitle tag="h5">Joke from Chuck</CardTitle>
            <CardText> {randomJoke.value}</CardText>
            <Button
              style={{ marginBottom: "1rem" }}
              onClick={
                favoritesCtx.itemIsFavorite(randomJoke.id)
                  ? () => deleteFromFav(randomJoke.id)
                  : () => addToFavorite(randomJoke)
              }
              id="btn"
            >
              {favoritesCtx.itemIsFavorite(randomJoke.id)
                ? "Remove from the favorites"
                : "Add to favorites"}
            </Button>
            <Button onClick={getRandomJoke}>Get Another Joke</Button>
          </Card>
        )}
      </Row>
      <Row>
        <div className="px-3">
          <Button style={{ width: "100%" }} onClick={addComponent}>
            {buttonText}
          </Button>
        </div>
        <div>{severalJokes ? <SeveralRandomJokes /> : ""}</div>
      </Row>
    </div>
  );
}
