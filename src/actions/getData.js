//@flow

import axios from "axios";

function start(): any {
  return {
    type: "GET_DATA_START"
  };
}

function success(data): any {
  return {
    type: "GET_DATA_SUCCESS",
    data
  };
}

function failure(error): any {
  return {
    type: "GET_DATA_FAILURE",
    error
  };
}

function getDataUrl(): any {
  return axios.get(`http://www.mocky.io/v2/5e86ec5531000011d8814754`);
}

export function getData(): any {
  return (dispatch: any) => {
    dispatch(start());
    return getDataUrl()
      .then(response => {
        dispatch(success(response.data));
      })
      .catch(error => {
        dispatch(failure(error));
      });
  };
}
