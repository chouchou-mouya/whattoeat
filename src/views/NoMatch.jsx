import { useState } from "react";

function NoMatch() {
  const [count, setCount] = useState(0);
  console.log("NoMatch")
  return (
    <div>
      <h1>NoMatch</h1>
    </div>
  );
}

export default NoMatch;