import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import NotesContainer from "./components/NotesContainer";

function App() {
  const [notesArray, setNotesArray] = useState([]);
  const API_URL = "http://localhost:5000/notes";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setNotesArray(data))
      .catch((err) => console.error("Error fetching notes:", err));
  }, []);

  async function addNote(newItem) {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });
      const savedNote = await response.json();

      setNotesArray((prevNotes) => [
        ...prevNotes,
        { ...newItem, _id: savedNote.insertedId },
      ]);
    } catch (err) {
      console.error("Failed to add note:", err);
    }
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
