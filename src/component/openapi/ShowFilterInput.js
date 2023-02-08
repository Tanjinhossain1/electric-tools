import React, { useRef, useState } from "react";

const ShowFilterInput = () => {
  return (
    <div >
      <div className="flex  justify-center text-white">
        <h4 className="text-4xl mt-5">Examples</h4>
      </div>
      <div className="flex  justify-center text-white">
        <p className="text-2xl mt-3">
          Explore what's possible with some example applications
        </p>
      </div>
      <div className="flex w-2/4 gap-4 mx-auto mt-4 justify-center">
        <input
          type="search"
          id="default-search"
          class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
          required
        />
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
           All Catagory
          </option>
          <option  >Question </option>
          <option>Code </option>
        </select> 
      </div>  
    </div>
  );
};
export default ShowFilterInput;
