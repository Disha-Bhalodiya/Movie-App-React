import React, { useState, useEffect } from "react";

// set the api link
export const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&`;


//create function for store use states and fetch data from api 
const Usefetch = (apiParams) => { //pass here param for get data from api and get data as an argu. 
    const [isLoading, setIsLoading] = useState(true); //create this state for show loading ...
    const [isError, setIsError] = useState({ show: "false", msg: "" });//create this state for show error
    const [movie, setMovie] = useState(null);//create for show movies

    //this function is used for 
    const getMovie = async(url) => {
        setIsLoading(true); //on browser load show loading...
        try {//create for fetch url and convert data into json for show on browser
            const res = await fetch(url);
            const data = await res.json();

            console.log(data);
            if (data.Response === "True") { //this condition will execute when data sucessfully fetch from api
                setIsLoading(false);
                setMovie(data.Search || data);
                setIsError({ show: "false", msg: "" });
            } 
            
            //this message is used for show error message on browser load for enter movie name
            else {
                setIsError({ show: "true", msg: data.Error });
            }
            
        } catch (error) { //this will print error message in log when url is wrong
            console.log(error);
        }
    };

    // debouncing -> used for optimize the code  
    useEffect(() => { 
        let timeOut = setTimeout(() => { //fetch movie data from api and display after 1 second 
            getMovie(`${API_URL}&s=${apiParams}`);
        }, 1000);
        console.log("set");
        return () => { //used for give response only one time after user submit the form or input data
            clearTimeout(timeOut);
            console.log("clear");
        };
    }, [apiParams]); 

    return { isLoading, isError, movie }; //this three states is return for used in other components
};

export default Usefetch;