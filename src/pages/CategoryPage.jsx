import ProductCard from "../components/cards/ProductCard";

function CategoryPage() {
   return (
      <section>
         {/* Category Section */}
         <div className="mt-10">
            <h2 className="text-2xl font-bold mb-6">Men's Clothing</h2>
            <div className="max-w-[300px]">
               <ProductCard />
            </div>
         </div>
      </section>
   );
}

export default CategoryPage;
