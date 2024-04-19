import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
   {
      path: "/",
      element:"",
      children: [
         {
            path: "",
            element: <div>Home</div>,
         },
         {
            path: "/:category",
            element: <div>Category</div>,
         },
      ],
   },
]);

export default router;
