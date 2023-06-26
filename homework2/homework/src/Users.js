import React, { useEffect, useState } from "react";
import apiRequest from "./apiRequest";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchItem() {
      let data = await apiRequest("https://jsonplaceholder.typicode.com/users");
      setUsers(data);
    }
    fetchItem();
  }, []);

  return (
    <div>
      User
      <ul>
        {users.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </ul>
    </div>
  );
};

export default Users;
