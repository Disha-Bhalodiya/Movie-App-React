import React, { useContext, useState ,createContext} from "react";
import Usefetch from "./Usefetch";

const AppContext = createContext(); //create context is an object from react and fetch closest value of current context 

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("harry potter"); //create query state for store input value and pass default movie name when app run on browser 
  const { isLoading, isError, movie } = Usefetch(`&s=${query}`); //this all states are passed from usefetch component 

  return (
    //hare pass values as an argu. and it can fetch within the provider
    <AppContext.Provider value={{ query, movie, setQuery, isLoading, isError }}> 
      {" "}
      {/* //passed  data child component to parent component */}
      {children}{" "} 
    </AppContext.Provider>
  );
};

//here create global context for used app context to other components
const useGlobalContext = () => {
  return useContext(AppContext); //returns the current context value, as given by the nearest context provider
};

export { AppContext, AppProvider, useGlobalContext }; //exports context from the file
