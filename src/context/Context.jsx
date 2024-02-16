/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [recipies, setRecipies] = useState([]);
  const [loading, setLoading] = useState(false);
  async function handleSubmit(event) {
    event.preventDefault();
    fetchData();
  }
  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const { data } = await response.json();
      if (data?.recipes?.length > 0) {
        setRecipies(data.recipes);
      }
      console.log(recipies);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        darkMode,
        setDarkMode,
        handleSubmit,
        fetchData,
        recipies,
        loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
