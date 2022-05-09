import { Routes as RouterRoutes, Route } from "react-router-dom";
import { Categories } from "./pages/Categories";
import { Favorites } from "./pages/Favorite";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
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
