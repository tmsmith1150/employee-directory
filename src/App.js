import React, { useEffect, useState } from "react";
import EmployeeSearch from "./EmployeeSearch";
import Employee from "./Employee";
import { getUsers } from "./API";
import "./App.css";

function App() {
  const [initialUsers, updateAvailableUsers] = useState([]);
  const [usersToRender, updateUsersToRender] = useState([]);

  useEffect(() => {
    getUsers().then(({ data: { results } }) => updateAvailableUsers(results));
  }, []);

  return (
    <div className="App">
      <h1 className="h1">Employee Directory</h1>
      <p>
        Search by Last Name
      </p>
      <EmployeeSearch users={initialUsers} updateUsers={updateUsersToRender} />
      <Employee users={usersToRender} />
    </div>
  );
}

export default App;
