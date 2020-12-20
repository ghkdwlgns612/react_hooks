import React from "react";
import "./styles.css";

const useConfirm = (message="", callback, reject) => {  
  if(!callback || typeof callback !== "function"){
    return;
  }
  if(!reject || typeof reject !== "function"){
    return;
  }

  const upadte = () => {
    if(confirm(message)){
      callback();
    }else{
      reject();
    }
  }
  return upadte;

}

export default function App() {
  const chk = () => console.log("OK");
  const del = () => console.log("BY");
  const modal = useConfirm("Are you sure",chk, del);


  return (
    <div className="App">
    <button onClick={modal}>Delete</button>
    </div>
  );
}
