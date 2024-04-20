const categoryEndpoints = {
   "mens-clothing": "men's clothing",
   "womens-clothing": "women's clothing",
   // Add more mappings as needed
};

// Utility function to resolve category paths from route parameters
export const resolveCategoryUrl = (name) => {
   if (categoryEndpoints[name]) {
      return categoryEndpoints[name];
   }
   return name;
};

const categoryDictionary = {
   "men's clothing": {
      route: "mens-clothing",
      bgColor: "#2BD9AF",
      displayName: "Men's Clothing",
   },
   "women's clothing": {
      route: "womens-clothing",
      bgColor: "#FF5E84",
      displayName: "Women's Clothing",
   },
   // Add more categories as needed
};

// Utility function to map category names to additional information (colors, routes, etc)
export const mapCategoryNamesToInfo = (name) => {
   const category = categoryDictionary[name];
   if (!category)
      return {
         route: name,
         bgColor: "#8A2BE2",
         displayName: name,
      };
   return category;
};
