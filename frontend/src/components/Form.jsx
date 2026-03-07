import React from "react";

function Form() {
  return (
    <form className="flex flex-col items-center">
      <div className="flex flex-col items-center w-6/12 gap-2">
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
            className="border p-2 rounded shadow-sm text-sm md:text-xl"
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
            className="border p-2 rounded shadow-sm text-sm h-12 md:h-16 md:text-xl"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-600 transition md:text-xl"
        >
          Save Note
        </button>
      </div>
    </form>
  );
}

export default Form;
