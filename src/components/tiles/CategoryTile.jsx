import { useNavigate } from "react-router-dom";

import { mapCategoryNamesToInfo } from "../../utils/category";

function CategoryTile({ name, size = "w-full h-56" }) {
   const navigate = useNavigate();

   const categoryData = mapCategoryNamesToInfo(name);

   return (
      <div
         onClick={() => navigate(`/category/${categoryData?.route}`)}
         className={`flex items-center justify-center rounded-2xl shadow-custom ${size} click-transition`}
         style={{ backgroundColor: categoryData?.bgColor }}
      >
         {/* category title */}
         <h1 className="text-white text-3xl font-bold capitalize mb-0">
            {name}
         </h1>
      </div>
   );
}

export default CategoryTile;
