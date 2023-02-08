import React, { useEffect, useRef, useState }  from "react"; 


const ShowHooksPower = () => { 
const [changeText,setChangeText] = useState('Example');
const inputRef = useRef();

console.log('useRef ', inputRef)
    useEffect(()=>{
        
    },[changeText])
  return (
    <div className="bg-blue-800 min-h-screen">
     <div className="flex  justify-center text-white">
        <h4 className="text-4xl mt-5">{changeText}</h4>
      </div>
      <div className="flex  justify-center text-white">
        <p className="text-2xl mt-3">
        Today I will SHow About React Three Hook useState, useEffect, UseRef
        </p>
      </div>
      <div className="flex w-2/4 gap-4 mx-auto mt-4 justify-center">
        <input
        onChange={(e)=>setChangeText(e.target.value)}
        ref={inputRef}
          type="search"
          id="default-search"
          class="block w-full focus:bg-yellow-300 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
          required
        /> 
      </div> 
    </div>
  );
};
export default ShowHooksPower;
