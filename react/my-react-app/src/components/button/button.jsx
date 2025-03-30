import { useState } from "react";

function Button({text}) {
    let [x, setX] = useState(0);
    return (
      <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={()=>{
        setX(x+1);
      }}>
       {text}
       {x}
      </button>
    );
  }
  
  export default Button;
  