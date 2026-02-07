import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function User() {
  console.log("🌹 User Component Rendered");

  const { id } = useParams();

  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);

  console.log("🌹 user ", user);

  // useEffect(() => {} ,   []);
  console.log("🌹 Before useEffect");

  useEffect(() => {
    console.log("🌹 Inside useEffect");
    getUser();
  }, [id]);

  useEffect(() => {
    getUsers();
  }, []);

  console.log("🌹 After useEffect");

  const getUser = async () => {
    const api = `https://dummyjson.com/users/${id}`;

    const res = await fetch(api);

    console.log("🌹 api", api);

    console.log("🌹 res", res);

    const data = await res.json();
    console.log("🌹 data", data);

    setUser(data);
  };

  // Get some users
  const getUsers = async () => {
    const limit = getRndInteger(4, 8);
    const skip = getRndInteger(5, 100);
    const api = `https://dummyjson.com/users?limit=${limit}&skip=${skip}&select=id,firstName,lastName,image`;

    console.log("✨  users api ", api);

    const res = await fetch(api);
    console.log("✨ users res", res);

    const data = await res.json();
    console.log("✨ users data", data);

    setUsers(data.users);
  };

  return (
    <div className="p-4">
      <h2>User {id} Page</h2>
      <p>First Name: {user.firstName}</p>
      <img src={user.image} alt="" />

      <div className="p-6">
        <h3 className="text-xl">Other Users</h3>

        <div className="flex gap-3">
          {users.map((user) => (
            <div className="border p-2">
              <div>
                <img src={user.image} alt="" />
              </div>
              <div>
                {user.firstName} {user.lastName}
              </div>
              <Link to={`/users/${user.id}`}>View</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
