"use client";
import React from "react";

export default function Counter({ users }) {
  console.log(users);
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>There are {users.length} users</p>
      <button
        className="px-5 py-2 bg-slate-300"
        onClick={() => setCount((c) => c + 1)}
      >
        {count}
      </button>
    </div>
  );
}
