// import React from 'react'

function Couses() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6">Contact</h1>
  
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Name</h4>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Email</h4>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Text</h4>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 "
            />
          </div>
  
          <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Submit
          </button>
        </div>
      </div>
    )
  }
  
  export default Couses;
  