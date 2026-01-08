import React from "react";

function Splictbtn({ text, setSplitText }) {
  return (
    <button
      onClick={() =>
        setSplitText(
          text
            .split(" ")
            .map(item => item.trim())   
            .filter(item => item !== "")
        )
      }
      className="bg-yellow-500 text-white px-3 py-1 rounded"
    >
      SplitText
    </button>
  );
}

export default Splictbtn;
