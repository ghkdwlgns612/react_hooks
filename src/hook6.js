import React, { useEffect } from "react";

const Before = (Life) =>{

  if(typeof Life !== "function"){
    return ;
  }
  const handle = (event) => {
    const {clientY} = event;
    if(clientY > 0){
      Life();
    }
    };

  useEffect(() => {
    document.addEventListener("mouseleave",handle);
    return () => {document.removeEventListener("mouseleave",handle)};
    },[])
}

export default function Hook6() {

  const useBefore = () => {console.log("use before")};
  Before(useBefore);



  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
    </div>
  );
}
