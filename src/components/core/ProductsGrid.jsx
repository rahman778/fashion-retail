import ProductCard from "../cards/ProductCard";

function ProductsGrid({ title, products }) {
   return (
      <>
         <h2 className="text-2xl font-bold capitalize mb-6">{title}</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.length > 0 ? (
               products.map((product) => (
                  <div key={product.id}>
                     <ProductCard product={product} />
                  </div>
               ))
            ) : (
               <h1 className="text-lg font-bold">No products to show!</h1>
            )}
         </div>
      </>
   );
}

export default ProductsGrid;
