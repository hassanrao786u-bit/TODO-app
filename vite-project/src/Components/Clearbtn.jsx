import React from "react";

function Clearbtn({ setText, setSplitText }) {
  return (
    <button
      onClick={() => {
        setText("");
        setSplitText([]);
      }}
      className="bg-red-500 text-white px-3 py-1 rounded  "
    >
      Clear All
    </button>
  );
}

export default Clearbtn;
