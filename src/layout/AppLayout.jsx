import { Outlet } from "react-router-dom";
import ProductCard from "../components/cards/ProductCard";
import CategoryTile from "../components/tiles/CategoryTile";

function AppLayout() {
   return (
      <>
         <div className="max-w-[300px] p-3 m-5">
            <ProductCard />
         </div>

         <div className="max-w-[300px] p-3 m-5">
            <CategoryTile title={"Men's Clothing"} />
         </div>

         <main>
            <Outlet />
         </main>
      </>
   );
}

export default AppLayout;
