import React from "react";

const User = ({ user }) => {
  return (
    <table className="flex border border-solid divide-y-1 justify-around">
      <tbody>{user.id}</tbody>
      <tbody>{user.name}</tbody>
      <tbody>{user.username}</tbody>
      <tbody>{user.email}</tbody>
      <tbody>{user.phone}</tbody>
      <tbody>{user.website}</tbody>
    </table>
  );
};

export default User;
