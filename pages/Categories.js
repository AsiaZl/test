import { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import { api } from "../api";
import { CategorySeveralJokes } from "../components/CategorySeveralJokes";
import { Layout } from "../components/maincomponents/Layout";
import font from "../components/Fonts.module.css";

export function Categories() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    api.get("/categories").then(
      (response) => {
        setCategories(response.data);
        setCategory(response.data[0]);
        setIsLoading(false);
      },
      (error) => {
        setIsLoading(false);
        setError(error);
      }
    );
  }, []);

  function selectedValue(e) {
    setCategory(e.target.value);
  }

  if (error) {
    return (
      <Layout>
        <p>Opps{error.message}</p>
      </Layout>
    );
  }
  if (isLoading) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    );
  }
  return (
    <Layout>
      <div style={{ width: "70%" }}>
        <h3 className={font.fontHeader}>
          It's a place where you can find jokes by the category
        </h3>
        <CategorySeveralJokes
          onChangeValue={selectedValue}
          selectedCategory={category}
          allCategories={categories}
          category={category}
        />
      </div>
    </Layout>
  );
}
