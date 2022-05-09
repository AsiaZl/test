import { Col } from "reactstrap";
import { Input } from "./Input";
import { Button } from "./Button";
import font from "./Fonts.module.css";

export function SeveralRandomJokesForm({ onSubmitChoise }) {
  return (
    <form onSubmit={onSubmitChoise}>
      <div>
        <label htmlFor="numberOfJokesInput" className={font.font}>
          Determine the number of jokes
        </label>
        <Col lg={2}>
          <Input id="numberOfJokesInput" type="number" min="1" max="120" />
          <div style={{ margin: "1rem 0 1rem 0" }}>
            <Button type="submit">Submit</Button>
          </div>
        </Col>
      </div>
    </form>
  );
}
