import React, { Component } from "react";
import Note from "./Note";

function NotesContainer(props) {
  async function deleteNote(id) {
    try {
      await fetch(`http://localhost:5000/notes/${id}`, {
        method: "DELETE",
      });

      props.setNotes((prevValue) => {
        return prevValue.filter((noteItem) => noteItem._id !== id);
      });
    } catch (err) {
      console.error("Delete failed:", err);
    }
  }

  return (
    <div className="w-4/5 self-center grid justify-center grid-cols-[repeat(auto-fit,minmax(200px,200px))] gap-4">
      {props.notes &&
        props.notes.map((noteItem, index) => (
          <Note
            key={noteItem._id}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        ))}
    </div>
  );
}

export default NotesContainer;
