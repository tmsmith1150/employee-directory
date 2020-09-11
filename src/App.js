import React, { useEffect, useState } from "react";
import EmployeeSearch from "./EmployeeSearch";
import Employee from "./Employee";
import { getEmployees } from "./API";
import "./App.css";

function App() {
  const [initialEmployees, updateAvailableEmployees] = useState([]);
  const [employeesToRender, updateEmployeesToRender] = useState([]);

  useEffect(() => {
    getEmployees().then(({ data: { results } }) => updateAvailableEmployees(results));
  }, []);

  return (
    <div className="App">
      <h1 className="h1" class="animate__animated animate__fadeInLeft">Employee Directory</h1>
      <p>
        Search by Last Name
      </p>
      <EmployeeSearch employees={initialEmployees} updateEmployees={updateEmployeesToRender} />
      <Employee employees={employeesToRender} />
    </div>
  );
}

export default App;
