function CategoryTile({ title, size = "w-full h-56" }) {
   return (
      <div
         className={`bg-red-300 flex items-center justify-center rounded-2xl shadow-custom ${size} click-transition`}
      >
         {/* category title */}
         <h1 className="text-white text-3xl font-bold mb-0 "> {title}</h1>
      </div>
   );
}

export default CategoryTile;
