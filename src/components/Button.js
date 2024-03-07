import React from "react";

const Button = ({name}) => {
    return(
        <div>
            <button className="px-5 py-2 m-2 bg-black text-white rounded-lg">All</button>
            {name.map((name,key)=>{
               return <button id={key+1}  className="px-5 py-2 m-2 bg-gray-200 text-black rounded-lg">{name}</button>
            })}
        </div>
    );
}

export default Button;