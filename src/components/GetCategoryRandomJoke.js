import { useState, useEffect } from "react";
import { api } from "../api";
import { CategoryRandomJoke } from "./CategoryRandomJoke";
import { Spinner } from "reactstrap";

export function GetCategoryRandomJoke() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    api
      .get("/categories")
      .then((response) => {
        setIsLoading(false);
        setCategories(response.data);
        setSelectedCategory(response.data[0]);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, []);

  function selectedValue(e) {
    setSelectedCategory(e.target.value);
  }
  if (error) {
    return <div>Oooops...{error.message}</div>;
  }
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <CategoryRandomJoke
        categories={categories}
        selectedValue={selectedValue}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}
