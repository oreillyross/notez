import React from "react";


function sayHello(message:string) {
  console.log(`Hello, ${message}`);
  
}

sayHello('World!')

function SearchInput() {
  return (
    <div className="w-72 border-black">
      <div className="relative w-full min-w-[200px] h-10">
         <input type="text" className="peer w-full h-full bg-transparent text-blue-900" placeholder=""/>
      </div>
    </div>
  );
}

export default SearchInput;
