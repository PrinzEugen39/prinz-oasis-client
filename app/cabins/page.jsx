import React from "react";
import Counter from "../_components/Counter";

const Page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  return (
    <div>
      <h1 className="mt-6 text-lg font-semibold">Cabins Page :D</h1>

      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <Counter users={data}/>
    </div>
  );
};

export default Page;
