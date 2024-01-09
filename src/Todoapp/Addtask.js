import React, { useState } from "react";

const Addtask = ({ Addtask }) => {
  const [value, setvalue] = useState("");

  const additem = () => {
    if (value) {
      Addtask(value);
    } else {
      alert("invalid here..");
      setvalue("");
    }
  };

  return (
    <>
      <div className="input container">
        <input
          type="text"
          className="input"
          placeholder="Enter Here.."
          value={value}
          onChange={(e) => {
            setvalue(e.target.value);
          }}
        />
        <button onClick={additem} className="add-btn">
          ADD
        </button>
      </div>
    </>
  );
};

export default Addtask;
