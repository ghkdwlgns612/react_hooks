import React from "react";
import "./styles.css";

const usePreventLeave = () => {
  const listner = (event) =>{
    event.preventDefault();
    event.returnValue = "";
  }
  const enablePrevent = () => window.addEventListener("beforeunload", listner);
  const disablePrevent = () => window.removeEventListener("beforeunload", listner);
return {enablePrevent, disablePrevent};
}

export default function App() {
 const {enablePrevent, disablePrevent} = usePreventLeave();
 
 return(
 <div>
   <button onClick={enablePrevent}>Protect</button>
   <button onClick={disablePrevent}>UnProtect</button>
 </div>
);
}
