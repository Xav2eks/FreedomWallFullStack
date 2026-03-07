import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import NotesContainer from "./components/NotesContainer";

function App() {
  const [notesArray, setNotesArray] = useState([]);

  function addNote(newItem) {
    setNotesArray((prevNotes) => {
      return [...prevNotes, newItem];
    });
  }

  return (
    <div className="bg-[#FDFBD4] h-svh flex flex-col gap-2 md:gap-8">
      <Header />
      <Form onAdd={addNote} />
      <NotesContainer notes={notesArray} setNotes={setNotesArray} />
    </div>
  );
}

export default App;
