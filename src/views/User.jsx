import { useState } from "react";

function User() {
  const [count, setCount] = useState(0);
  console.log("user")
  return (
    <div>
      <h1>User</h1>
    </div>
  );
}

export default User;