import { createHashRouter } from "react-router";
import AppLayout from "./AppLayout";
import ProjectPage from "./pages/ProjectPage";
import NotFoundPage from "./pages/NotFoundPage";

// Hash routing avoids 404s on GitHub Pages refresh/deep links.
export const router = createHashRouter([
  {
    path: "/",
    Component: AppLayout,
  },
  {
    path: "/projects/:id",
    Component: ProjectPage,
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);
