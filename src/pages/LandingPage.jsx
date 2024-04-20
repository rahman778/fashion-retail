import ProductCard from "../components/cards/ProductCard";
import CategoryTile from "../components/tiles/CategoryTile";

function LandingPage() {
   return (
      <section>
         {/* Flash Sale Section */}
         <div className="mt-10">
            <h2 className="text-2xl font-bold mb-6">Flash Sale</h2>
            <div className="max-w-[300px]">
               <ProductCard />
            </div>
         </div>

         {/* Category Section */}
         <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Categories</h2>
            <div className="flex flex-col sm:flex-row gap-8">
               <CategoryTile title={"Men's Clothing"} />
               <CategoryTile title={"Men's Clothing"} />
            </div>
         </div>
      </section>
   );
}

export default LandingPage;
