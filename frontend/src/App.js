import axios from "axios";
import React, { useEffect } from "react";

const BACKEND = process.env.REACT_APP_BACKEND;

function App() {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(BACKEND);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
      
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
