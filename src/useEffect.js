import React, { useEffect, useState } from "react";

export default function UseEffect()  {
  const sayHello = () => {
    console.log("Helo!");
  };
  const [number, setnumber] = useState(0);
  const [anumber, setanumber] = useState(0);

  useEffect(sayHello, [number, anumber]);

  return (
    <div>
      <button onClick={() => setnumber(number + 1)}>{number}</button>
      <button onClick={() => setanumber(anumber + 1)}>{anumber}</button>
    </div>
  );
}