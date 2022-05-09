import { Layout } from "../components/maincomponents/Layout";
import { useContext } from "react";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { CardText } from "reactstrap";
import font from "./../components/Fonts.module.css";
import FavoriteContext from "../store/favorites-context";

export function Favorites() {
  const favoritesCtx = useContext(FavoriteContext);

  function DeleteFromFav(id) {
    favoritesCtx.removeFavorite(id);
  }

  return (
    <div>
      <Layout>
        {favoritesCtx.favorites.length === 0 ? (
          <p className={font.fontNav}>There is no favorite jokes yet</p>
        ) : (
          favoritesCtx.favorites.map((joke) => {
            return (
              <Card key={joke.id}>
                <CardText>{joke.value}</CardText>
                <Button onClick={() => DeleteFromFav(joke.id)} id="btn">
                  Remove from the favorites
                </Button>
              </Card>
            );
          })
        )}
      </Layout>
    </div>
  );
}
