export const ADD_TO_PREFER = "ADD_TO_PREFER";
export const REMOVE_FROM_PREFER = "REMOVE_FROM_PREFER";
export const GET_RESULTS = "GET_RESULTS";

export const removeFromPrefer = i => {
  return {
    type: REMOVE_FROM_PREFER,
    payload: i,
  };
};

export const addToPrefer = data => {
  return {
    type: ADD_TO_PREFER,
    payload: data,
  };
};

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

export const getResults = query => {
  return async (dispatch, useState) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_RESULTS,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
