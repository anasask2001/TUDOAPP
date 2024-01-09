import React from "react";

const Listtask = ({ task, index, removetask }) => {
  return (
    <>
      <div className="list-task">
        {task.title}

        <button
          onClick={() => {
            removetask(index);
          }}
          className="dlt-btn"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Listtask;
