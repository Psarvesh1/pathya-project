import React, { useState, useEffect } from "react";
import "./App.css"
import data from "./data.json";
import title from "./title.json";
const App = () => {
  const [sDate, setSDate] = useState([]);
  const [header, setHeader] = useState([])
  const min = "2017-03-25";
  const max = "2021-08-30";
  const arr = [];
  const arr2 = []
  const titles = [
    "pro_id",
    "pname",
    "description",
    "client_id",
    "team_name",
    "update_date",
    "flag",
    "status_flag",
    "start_date",
    "end_date",
    "estimated_hrs",
    "ClientName",
    "is_billable",
    "is_task_mandate",
    "is_sprint_mandate",
    "team_id",
    "lock_date",
  ];

  const getData = async () => {
    titles.map((item) => {
      arr2.push(item)
    })
    setHeader(arr2)
    const filteredData = await data.filter(
      (item) => item.start_date >= min && item.end_date <= max
    );
    filteredData.map((item) => {
      arr.push(item);
    });
    setSDate(arr);
  };

  useEffect(() => {}, []);
  return (
    <div>
      <div>
        <table>
          <tbody>
            <tr>
              {header.map((item, i) => {
                console.log(item);
                return <th key={i}>{item}</th>;
              })}
            </tr>
            
              {sDate.map((item, i) => {
                return (
                  <tr>
                  <td key={i}>{item.pro_id}</td>
                  <td key={i}>{item.pname}</td>
                  <td key={i}>{item.description}</td>
                  </tr>
                  );
              })}
            
          </tbody>
        </table>
      </div>

      <button onClick={getData}>Click</button>
    </div>
  );
};

export default App;
