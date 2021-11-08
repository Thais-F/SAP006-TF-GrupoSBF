import React from "react";

export const getPromotions = () => {

    const myInit = {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
    };

    return fetch("http://localhost:3000/promotions", myInit)
    .then(function (response) {
        return response.json();
      })
      .catch((error) => {
        return error;
      });  
};