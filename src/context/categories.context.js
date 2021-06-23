import React, { useState, useCallback } from "react";
import { service } from "utils";

const CategoriesContext = React.createContext();
export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const getCategories = useCallback(() => {
    service.get("/categories").then((result) => {
      setCategories(result.data);
      return result.data;
    });
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories, getCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategories = () => React.useContext(CategoriesContext);
