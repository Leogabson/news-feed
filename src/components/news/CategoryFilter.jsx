import { CATEGORIES } from "../../utils/constants";

const CategoryFilter = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="w-full border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="container-custom">
        {/* Scrollable container for mobile */}
        <div className="flex gap-1 sm:gap-2 overflow-x-auto scrollbar-hide py-3 sm:py-4">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category.value;

            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.value)}
                className={`
                  flex-shrink-0 px-4 py-2 sm:px-5 sm:py-2.5
                  text-sm sm:text-base font-medium rounded-lg
                  transition-all duration-200
                  whitespace-nowrap
                  focus:outline-none focus:ring-2 focus:ring-primary/50
                  active:scale-95
                  ${
                    isActive
                      ? "bg-primary text-white shadow-md"
                      : "bg-gray-100 text-text-secondary hover:bg-gray-200 hover:text-text-primary"
                  }
                `}
                aria-label={`Filter by ${category.label}`}
                aria-pressed={isActive}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Custom styles to hide scrollbar but keep functionality */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default CategoryFilter;
