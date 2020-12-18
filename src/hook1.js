import React, { useState } from "react";

	const useInput = (initialValue, validator) => {
	  const [value, setValue] = useState(initialValue);
	  const onChange = (event) => {
	    const { target: {value} } = event;
	    let willupdate = true;
	
	    if (typeof validator === "function") {
        willupdate = validator(value);
        console.log({validator});
	    }
	
	    if (willupdate) {
	      setValue(value);
	      console.log(value);
	    }
	  };
	  return { value, onChange };
	};
	
	const Hook1 = () => {
	  const max = (value) => value.length <= 10;
	  const name = useInput("Mr.", max);
	
	  return (
	    <div className="App">
	      <h1>Helloox</h1>
	      <input placeholder="Name" {...name}></input>
	    </div>
	  );
	};
	
	export default Hook1;