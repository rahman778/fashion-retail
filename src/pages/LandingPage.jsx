import { useEffect, useState } from "react";

import CategoryTile from "../components/tiles/CategoryTile";
import ProductsGrid from "../components/core/ProductsGrid";
import Loader from "../components/core/Loader";

const categories = ["men's clothing", "women's clothing"];

function LandingPage() {
   const [products, setProducts] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      fetchProducts();
   }, []);

   const fetchProducts = async () => {
      try {
         setIsLoading(true);
         const response = await fetch(`https://fakestoreapi.com/products`);
         if (!response.ok) {
            throw new Error("Failed to fetch products");
         }
         const data = await response.json();

         // Filter "Men's Clothing" category for demo purposes
         const menProducts = data
            .filter((product) => {
               return product.category === "men's clothing";
            })
            .slice(0, 2);

         // Filter "Women's Clothing" category for demo purposes
         const womenProducts = data
            .filter((product) => {
               return product.category === "women's clothing";
            })
            .slice(0, 2);

         const displayedProducts = [...menProducts, ...womenProducts];

         setProducts(displayedProducts);
         setIsLoading(false);
      } catch (error) {
         console.log("Error fetching products:", error);
         setIsLoading(false);
      }
   };

   return (
      <section>
         {/* Flash Sale Section */}
         <div className="mt-10">
            {isLoading ? (
               <div className="h-40">
                  <Loader />
               </div>
            ) : (
               <ProductsGrid title="Flash Sale" products={products} />
            )}
         </div>

         {/* Category Section */}
         <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               {categories.map((category, index) => (
                  <div key={index}>
                     <CategoryTile name={category} />
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}

export default LandingPage;
