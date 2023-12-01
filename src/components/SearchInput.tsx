import React from "react";


function sayHello(message:string) {
  console.log(`Hello, ${message}`);
  
}

sayHello('World!')

function SearchInput() {
  return (
    <div className="bg-red-500 mx-auto max-w-4xl p-6">
      <input className="bg-blue-300 text-2xl p-2" type="text" />
    </div>
  );
}

export default SearchInput;
