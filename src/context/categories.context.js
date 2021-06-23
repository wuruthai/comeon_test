import React from "react";
import { useFetch } from "hooks";

const CategoriesContext = React.createContext();
export const CategoriesProvider = ({ children }) => {
  const {
    categoriesRequest: getCategories,
    categoriesData: categories,
    categoriesLoading,
  } = useFetch({
    url: "/categories",
    prefix: "categories",
    defaultData: [],
  });

  return (
    <CategoriesContext.Provider
      value={{ categories, getCategories, categoriesLoading }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategories = () => React.useContext(CategoriesContext);
