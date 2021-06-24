import { useState, useMemo } from "react";

const useSearch = (list, expression = (item) => item) => {
  const [search, setSearch] = useState("");

  const searchedList = useMemo(() => {
    return list.filter((item) => {
      const value = expression(item);
      return typeof value === "string"
        ? value.toLowerCase().includes(search.toLowerCase())
        : value === search;
    });
  }, [list, expression, search]);

  return { search, setSearch, searchedList };
};

export default useSearch;
