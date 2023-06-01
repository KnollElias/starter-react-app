import React, { useEffect, useState } from "react";
import uri from "../../service/server";
const BASE_URL = uri.uri;

const Ueber = () => {

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Making Request... ");
        const response = await fetch('/about');
        console.log("Made Request... ", response);
        if (response.ok) {
          const data = await response.json();
        } else {
          const errorStatus = response.status;
          throw new Error(`Failed to fetch data. Status: ${errorStatus}`);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);   

  return <>Test</>
};

export default Ueber;
