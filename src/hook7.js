import React, { useEffect, useRef } from "react";
import "./styles.css";



const useFadein = (duration = 3, delay = 1) => {
 
  if(typeof duration !== "number" || typeof delay !== "number"){
    return;
  }

  const element = useRef();

  useEffect(() => {
    if(element.current){
      const {current} = element;

      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  },[]);

  return {ref: element, style: {opacity:0}};
};

export default function App() {
  const el1 = useFadein(2,1);
  const el2 = useFadein(5,2);
  
  
  return (
    <div className="App">
      <h1 {...el1}>HELO</h1>
      <h1 {...el2}>HEeLO</h1>
    </div>
  );
}
