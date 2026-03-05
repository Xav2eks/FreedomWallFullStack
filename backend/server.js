import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.uri;
const client = new MongoClient(uri);

let notesCollection;

async function connectDB() {
  try {
    await client.connect();
    const db = client.db("notesApp");
    notesCollection = db.collection("notes");
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}

connectDB();

app.get("/notes", async (req, res) => {
  try {
    const notes = await notesCollection.find().toArray();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch notes" });
  }
});

app.get("/notes/:id", async (req, res) => {
  try {
    const note = await notesCollection.findOne({
      _id: new ObjectId(req.params.id),
    });
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch note" });
  }
});

app.post("/notes", async (req, res) => {
  try {
    const newNote = req.body;
    const result = await notesCollection.insertOne(newNote);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to create note" });
  }
});

app.put("/notes/:id", async (req, res) => {
  try {
    const updatedNote = req.body;
    const result = await notesCollection.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: updatedNote },
    );
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to update note" });
  }
});

app.delete("/notes/:id", async (req, res) => {
  try {
    const result = await notesCollection.deleteOne({
      _id: new ObjectId(req.params.id),
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to delete note" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
