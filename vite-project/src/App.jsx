import React, { useState } from "react";
import './index.css'
import Upperbtn from "./Components/Upperbtn";
import Lowerbtn from "./Components/Lowerbtn";
import Clearbtn from "./Components/Clearbtn";
import Splictbtn from "./Components/Splictbtn";

function App() {
  const [text, setText] = useState("");
  const [splitText, setSplitText] = useState([]);

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Todo App</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <div className="flex gap-2 mb-4">
        <Upperbtn text={text} setText={setText} />
        <Lowerbtn text={text} setText={setText} />
        <Splictbtn text={text} setSplitText={setSplitText} />
        <Clearbtn setText={setText} setSplitText={setSplitText} />
        
      </div>

      <ul className="list-disc list-inside space-y-1">
        {splitText.map((item, index) => (<li key={index}> {item} </li> ))}
      </ul>
    </div>
  );
}

export default App;
