import React, { useState } from "react";

function Note(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }

  return (
    <div className="border rounded flex flex-col bg-white">
      <div className="flex justify-between border-b border-gray-300">
        <h1 className="wrap-break-word pt-2 pb-2 pl-1 pr-1 text-xs md:text-xl">
          {props.title}
        </h1>
        <button
          className="text-[10px] w-4 h-4 rounded-full bg-gray-200 hover:bg-red-500 hover:text-white transition-colors hover:cursor-pointer md:text-xs md:w-6 md:h-6"
          onClick={handleDelete}
        >
          X
        </button>
      </div>
      <p className="pt-4 pb-4 pr-4 pl-1 text-xs wrap-break-word md:text-xl">
        {props.content}
      </p>
    </div>
  );
}

export default Note;
