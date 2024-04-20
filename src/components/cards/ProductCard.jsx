function ProductCard() {
   return (
      <div className="bg-white text-center pt-3 rounded-2xl shadow-custom click-transition w-full">
         {/* product title */}
         <h3 className="text-lg font-bold mx-3">Mens Cotton Jacket</h3>
         {/* product image */}
         <div className="mx-3 mt-3 h-60 overflow-hidden">
            <img
               className="object-cover"
               src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
               alt="product image"
            />
         </div>
         <div className="flex flex-col p-3 rounded-2xl bg-green-300">
            {/* product price */}
            <h5 className="text-xl font-bold text-primary">Rs 55.99</h5>
            {/* product description */}
            <p className="line-clamp-3">
               Great outerwear jackets for Spring/Autumn/Winter, suitable for
               many occasions, such as working, hiking...
            </p>
         </div>
      </div>
   );
}

export default ProductCard;
