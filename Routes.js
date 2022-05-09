import { Routes as RouterRoutes, Route } from "react-router-dom";
import { Categories } from "./src/components/pages/Categories";
import { Favorites } from "./src/components/pages/Favorite";
import { HomePage } from "./src/components/pages/HomePage";
import { NotFoundPage } from "./src/components/pages/NotFoundPage";
export function Routes() {
  return (
    <RouterRoutes>
      <Route index element={<HomePage />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<NotFoundPage />} />
    </RouterRoutes>
  );
}
