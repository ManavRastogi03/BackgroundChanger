import { useState } from "react"

function App() {
  const [Color,setcolor]=useState("olive")

  return (
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:Color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
      <button 
      onClick={()=>setcolor("red")}
      className="outline-none text-center text-white px-4 rounded-full shadow-lg "
      style={{backgroundColor:"red"}}
      >Red</button>

      <button 
      onClick={()=>setcolor("purple")}
      className="outline-none text-center text-white px-4 rounded-full shadow-lg "
      style={{backgroundColor:"purple"}}
      >purple</button>

      <button 
      onClick={()=>setcolor("green")}
      className="outline-none text-center text-white px-4 rounded-full shadow-lg "
      style={{backgroundColor:"green"}}
      >green</button>

      <button 
      onClick={()=>setcolor("yellow")}
      className="outline-none text-center text-white px-4 rounded-full shadow-lg "
      style={{backgroundColor:"yellow"}}
      >yellow</button>

      <button 
      onClick={()=>setcolor("orange")}
      className="outline-none text-center text-white px-4 rounded-full shadow-lg "
      style={{backgroundColor:"orange"}}
      >orange</button>

      <button 
      onClick={()=>setcolor("pink")}
      className="outline-none text-center text-white px-4 rounded-full shadow-lg "
      style={{backgroundColor:"pink"}}
      >pink</button>

      <button 
      onClick={()=>setcolor("magenta")}
      className="outline-none text-center text-white px-4 rounded-full shadow-lg "
      style={{backgroundColor:"magenta"}}
      >magenta</button>

      <button 
      onClick={()=>setcolor("black")}
      className="outline-none text-center text-white px-4 rounded-full shadow-lg "
      style={{backgroundColor:"black"}}
      >black</button>
      </div>
      </div>
      </div>
  
  )
}

export default App
