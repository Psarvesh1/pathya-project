import React, { useState, useEffect } from "react";
import data from "./data.json";
const App = () => {
  const [sDate, setSDate] = useState()
  const min = '2010-01-25';
  const max = '2021-08-30'
  const getData= ()=>{
    const filteredData = data.filter(
      
      item => item.start_date >=min &&  item.end_date <= max
    )
    filteredData.map(
      item => {
        console.log(item)
      }
    )
  }
  useEffect(() => {
    getData();
  }, []);
  return(
    <h1></h1>
  )
};

export default App;
