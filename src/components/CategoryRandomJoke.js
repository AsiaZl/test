import { useState } from "react";
import { Card, CardText, Row, Col, Button, Spinner } from "reactstrap";
import { api } from "../api";

export function CategoryRandomJoke({
  categories,
  selectedCategory,
  selectedValue,
}) {
  const [randomJoke, setRandomJoke] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function submitForm(e) {
    e.preventDefault();
    setIsLoading(true);
    api
      .get(`/random?category=${selectedCategory}`)
      .then((response) => {
        setRandomJoke(response.data.value);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }
  return (
    <Row>
      <Col md={{ size: 3, offset: 3 }} sm={6} xs={12}>
        <form onSubmit={submitForm}>
          <p> 1. Choose the category</p>
          <select
            onChange={selectedValue}
            value={selectedCategory}
            className="form-select"
            size="16"
            aria-label="size 16 select example"
          >
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
          <Button className="mt-3" type="submit" color="secondary">
            2. Click to get a random Joke
          </Button>
        </form>
      </Col>
      <Col style={{ display: "flex", alignItems: "center" }}>
        {randomJoke === "" ? (
          ""
        ) : (
          <Card className="p-4">
            {isLoading ? <Spinner /> : <CardText>{randomJoke}</CardText>}
          </Card>
        )}
        {error && <div>Oooops...{error.message}</div>}
      </Col>
    </Row>
  );
}
