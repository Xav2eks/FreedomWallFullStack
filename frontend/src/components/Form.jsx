import React from "react";
import { useState } from "react";

function Form(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(event) {
    if (title != "" && content != "") {
      event.preventDefault();
      props.onAdd({ title, content });
      setTitle("");
      setContent("");
    } else {
      alert("Input all fields to save note!");
    }
  }

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <div className="flex flex-col items-center w-6/12 lg:w-3/12 gap-2">
        <div className="flex flex-col w-full">
          <label
            htmlFor="noteTitle"
            className="font-semibold mb-1 text-sm md:text-xl"
          >
            Note Title:
          </label>
          <input
            id="noteTitle"
            type="text"
            placeholder="Input title of your note"
            name="noteTitle"
            className="border p-2 rounded shadow-sm text-sm md:text-md"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
              console.log(title);
            }}
          />
        </div>

        <div className="flex flex-col w-full">
          <label
            htmlFor="noteContent"
            className="font-semibold mb-1 text-sm md:text-xl"
          >
            Note Content:
          </label>
          <textarea
            id="noteContent"
            placeholder="Input your note"
            name="noteContent"
            className="border p-2 rounded shadow-sm text-sm h-12 md:h-16 md:text-md"
            value={content}
            onChange={(event) => {
              setContent(event.target.value);
              console.log(content);
            }}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-600 transition md:text-md"
        >
          Save Note
        </button>
      </div>
    </form>
  );
}

export default Form;
