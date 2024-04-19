import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../layout/AppLayout";

const router = createBrowserRouter([
   {
      path: "/",
      element: <AppLayout />,
      children: [
         {
            path: "",
            element: <h1>Home</h1>,
         },
         {
            path: "/:category",
            element: <div>Category</div>,
         },
      ],
   },
]);

export default router;
