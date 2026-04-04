import React from "react";
import axios from "axios";
import Note from "./Note";

function NotesContainer(props) {
  const API_URL = "https://fullstacknotesapp-ojsu.onrender.com/notes";

  async function deleteNote(id) {
    try {
      await axios.delete(`${API_URL}/${id}`);

      props.setNotes((prevValue) => {
        return prevValue.filter((noteItem) => noteItem._id !== id);
      });
    } catch (err) {
      console.error("Delete failed:", err.message);
    }
  }

  return (
    <div className="w-4/5 self-center grid justify-center grid-cols-[repeat(auto-fit,minmax(200px,200px))] gap-4">
      {props.notes &&
        props.notes.map((noteItem) => (
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
