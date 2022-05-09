import { Button } from "./Button";
import { Input } from "./Input";
import font from "./Fonts.module.css";

const id = "numberOfJoke";

export function CategorySeveralForm({
  formSubmit,
  onChangeValue,
  selectedCategory,
  allCategories,
}) {
  return (
    <form onSubmit={(e) => formSubmit(e, e.target[id].value)}>
      <select
        onChange={onChangeValue}
        value={selectedCategory}
        className="form-select "
        size="16"
        aria-label="size 16 select example"
      >
        {allCategories.map((category) => (
          <option style={{ color: " #0d6efd" }} key={category}>
            {category}
          </option>
        ))}
      </select>
      <label htmlFor={id} className={font.font}>
        2. Determine the number of jokes in this category
      </label>
      <Input id={id} type="number" min="1" />
      <div>
        <Button type="submit">Click to get Jokes</Button>
      </div>
    </form>
  );
}
