import axios from "axios";
export const FETCH_QUOTE_START = "FETCH_QUOTE_START";
export const FETCH_QUOTE_SUCCESS = "FETCH_QUOTE_SUCCESS";
export const FETCH_QUOTE_FAILURE = "FETCH_QUOTE_FAILURE";

export const getKanyeRest = () => dispatch => {
    dispatch({ type: FETCH_QUOTE_START });
    
    axios
        .get("https://api.kanye.rest")
        .then(response => {
            
            console.log(response)
            dispatch({ type: FETCH_QUOTE_SUCCESS, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: FETCH_QUOTE_FAILURE, payload: error.response });
        });

};
