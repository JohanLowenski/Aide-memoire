import React, { Fragment, useEffect } from "react";
import axios from "axios";
// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("https://jsonplaceholder.typicode.com/posts");
      setData(response.data);
      console.log("updated");
    };
    fetchData();
    console.log("mounted");
  }, []);
  console.log(data);
  return (
    <div className="App">
      <Fragment>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      </Fragment>
    </div>
  );
};

export default App;
