import { useContext } from 'react';
import { FiltersContext } from '../context/filter.context.jsx';

export const useFilters = () => {
  const { filters, setFilters } = useContext(FiltersContext);

  const changeFilters = (rawProducts) => {
    return [...rawProducts].filter((prod) => {
      const isCategory = filters.category === 'all' || prod.category === filters.category;
      const isPrice = prod.price >= filters.price;
      return isCategory && isPrice;
    });
  };

  return {
    changeFilters,
    filters,
    setFilters,
  };
};
