import { Layout } from "../components/maincomponents/Layout";
import { RandomJoke } from "../components/RandomJoke";

export function HomePage() {
  return (
    <Layout>
      <div style={{ width: "70%" }}>
        <RandomJoke />
      </div>
    </Layout>
  );
}
