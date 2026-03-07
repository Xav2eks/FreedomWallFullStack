import React, { Component } from "react";
import Note from "./Note";

function NotesContainer(props) {
  function deleteNote(id) {
    props.setNotes((prevValue) => {
      return prevValue.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="w-4/5 self-center grid justify-center grid-cols-[repeat(auto-fit,minmax(200px,200px))] gap-4">
      {props.notes &&
        props.notes.map((noteItem, index) => (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        ))}
    </div>
  );
}

export default NotesContainer;
