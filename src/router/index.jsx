import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../layout/AppLayout";
import LandingPage from "../pages/LandingPage";
import CategoryPage from "../pages/CategoryPage";

const router = createBrowserRouter([
   {
      path: "/",
      element: <AppLayout />,
      children: [
         {
            path: "",
            element: <LandingPage />,
         },
         {
            path: "/category/:category",
            element: <CategoryPage />,
         },
      ],
   },
]);

export default router;
