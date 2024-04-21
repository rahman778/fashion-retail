import { mapCategoryNamesToInfo } from "../../utils/category";

function ProductCard({ product }) {
   const categoryData = mapCategoryNamesToInfo(product?.category);

   return (
      <div className="bg-white text-center pt-3 rounded-2xl shadow-custom click-transition w-full max-w-[400px]">
         {/* product title */}
         <div className="line-clamp-2 min-h-14">
            <h3 className="text-lg font-bold mx-3">{product?.title}</h3>
         </div>

         {/* product image */}
         <div className="px-3 mt-3 h-44 overflow-hidden mx-auto">
            <img
               className="object-contain w-full h-full"
               src={product?.image}
               alt={product?.titile}
            />
         </div>
         <div
            className="flex flex-col p-3 rounded-2xl mt-4"
            style={{ backgroundColor: categoryData?.bgColor }}
         >
            {/* product price */}
            <h5 className="text-xl font-bold text-primary">{`Rs ${product?.price}`}</h5>
            {/* product description */}
            <p className="line-clamp-3 text-sm">{product?.description}</p>
         </div>
      </div>
   );
}

export default ProductCard;
