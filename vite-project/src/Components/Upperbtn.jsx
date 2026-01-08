import React from "react";

function Upperbtn({ text, setText }) {
  return (
    <button
      onClick={() => setText(text.toUpperCase())}
      className="bg-blue-500 text-white px-3 py-1 rounded"
    >
      Upper Case
    </button>
  );
}

export default Upperbtn;
