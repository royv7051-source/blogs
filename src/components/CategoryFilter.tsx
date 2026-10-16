import React from 'react';

interface CategoryFilterProps {
  categories: readonly string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  articleCounts: Record<string, number>;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  articleCounts,
}) => {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-200">
        <h2 className="text-xs uppercase tracking-widest font-mono text-stone-500">
          Curatorial Departments
        </h2>
        <span className="text-xs text-stone-400 font-mono">
          Showing {selectedCategory === 'All Dispatches' ? 'All 10 Essays' : selectedCategory}
        </span>
      </div>

      {/* Horizontal scrollable clean filter tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          const count = cat === 'All Dispatches' ? 10 : articleCounts[cat] || 0;

          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-stone-900 text-stone-50'
                  : 'bg-stone-100/90 text-stone-600 hover:text-stone-900 hover:bg-stone-200/70'
              }`}
            >
              <span>{cat}</span>
              <span className={`text-[10px] font-mono ${isSelected ? 'text-stone-300' : 'text-stone-400'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
