import React from "react";

function Lowerbtn({ text, setText }) {
  return (
    <button
      onClick={() => setText(text.toLowerCase())}
      className="bg-green-500 text-white px-3 py-1 rounded"
    >
      Lower Case
    </button>
  );
}

export default Lowerbtn;
