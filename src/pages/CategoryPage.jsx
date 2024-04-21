import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { resolveCategoryUrl } from "../utils/category";

import ProductsGrid from "../components/core/ProductsGrid";
import Loader from "../components/core/Loader";

function CategoryPage() {
   const { category } = useParams();

   const [products, setProducts] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   const categoryName = resolveCategoryUrl(category);

   useEffect(() => {
      fetchProducts();
   }, [category, categoryName]);

   const fetchProducts = async () => {
      try {
         setIsLoading(true);
         const response = await fetch(
            `https://fakestoreapi.com/products/category/${categoryName}`
         );
         if (!response.ok) {
            throw new Error("Failed to fetch products");
         }
         const data = await response.json();

         setProducts(data);
         setIsLoading(false);
      } catch (error) {
         console.log("Error fetching products:", error);
         setIsLoading(false);
      }
   };

   return (
      <section className="mt-10">
         {isLoading ? (
            <div className="h-40">
               <Loader />
            </div>
         ) : (
            <ProductsGrid title={categoryName} products={products} />
         )}
      </section>
   );
}

export default CategoryPage;
