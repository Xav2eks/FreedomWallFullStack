import { useState, useEffect } from "react";
import axios from "axios"; // 1. Import axios
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import NotesContainer from "./components/NotesContainer";

function App() {
  const [notesArray, setNotesArray] = useState([]);
  const API_URL = "https://fullstacknotesapp-ojsu.onrender.com/notes";

  // 2. Updated useEffect with Axios
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        // Axios puts the data inside a .data property
        setNotesArray(response.data);
      })
      .catch((err) => console.error("Error fetching notes:", err));
  }, []);

  // 3. Updated addNote with Axios
  async function addNote(newItem) {
    try {
      // Axios POST is much cleaner: axios.post(url, data)
      const response = await axios.post(API_URL, newItem);

      const savedNote = response.data;

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
