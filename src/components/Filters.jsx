import { useId } from 'react';
import { useFilters } from '../hooks/use-filters';

export function Filters() {
  const { setFilters, filters } = useFilters();
  const priceEleId = useId();
  const categoryEleId = useId();

  const handleRangePrice = (e) => {
    setFilters((prevState) => ({ ...prevState, price: e.target.value }));
  };

  const handleCategory = (e) => {
    setFilters((prevState) => ({ ...prevState, category: e.target.value }));
  };

  return (
    <div className="flex w-full justify-center md:justify-around flex-wrap gap-4 py-6">
      <div className="flex flex-col items-stretch">
        <label htmlFor="price" className="block mb-2 text-center text-sm font-medium text-gray-900 ">
          Precio desde
        </label>
        <input
          value={filters.price}
          onChange={handleRangePrice}
          type="range"
          name="price"
          id={priceEleId}
          min={0}
          max={1500}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />

        <span> {filters.price} </span>
      </div>

      <div className="flex flex-col">
        <label htmlFor={categoryEleId} className="text-center block mb-2 text-sm font-medium text-gray-900 ">
          Selecciona categoría
        </label>
        <select
          name="category"
          id={categoryEleId}
          value={filters.category}
          onChange={handleCategory}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="all">Todas las categorías</option>
          <option value="smartphones">Celulares</option>
          <option value="laptops">Laptops</option>
        </select>
      </div>
    </div>
  );
}
