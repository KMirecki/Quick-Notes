import { useState } from "react";
import { FormAddNote } from "./FormAddNote";
import { NoteDetails } from "./NoteDetails";
import { NoteList } from "./NoteList";
import { Stats } from "./Stats";

export const initialNotes = [
  {
    id: 1,
    title: "React JS",
    content: "Learn React",
    type: "work",
    isDone: false,
  },
  {
    id: 2,
    title: "Cleaning",
    content: "Washing dishes",
    type: "home",
    isDone: false,
  },
  {
    id: 3,
    title: "Cinema",
    content: "Watch a movie with friends",
    type: "other",
    isDone: true,
  },
];

export default function App() {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [notes, setNotes] = useState(initialNotes);
  const [selectedId, setSelectedId] = useState(null);
  const selectedNote = notes.find((note) => note.id === selectedId);

  function handleOpenForm() {
    setFormIsOpen((is) => !is);
    setSelectedId(null);
  }

  function handleAddNote(note) {
    setNotes((notes) => [...notes, note]);
    setFormIsOpen(false);
  }

  function handleDeleteNote(id) {
    setNotes((notes) => notes.filter((note) => note.id !== id));
    setSelectedId(null);
  }

  function handleSelection(note) {
    setSelectedId((curId) => (curId === note.id ? null : note.id));
    setFormIsOpen(false);
  }

  function handleDeleteAllNotes() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all notes?",
    );
    if (confirmed) {
      setNotes([]);
      setSelectedId(null);
    }
  }

  function handleToggleNote(id) {
    setNotes((notes) =>
      notes.map((note) =>
        note.id === id ? { ...note, isDone: !note.isDone } : note,
      ),
    );
  }

  return (
    <div className="app">
      <div className="sidebar">
        <NoteList
          notes={notes}
          onSelection={handleSelection}
          selectedId={selectedId}
        />
        <div className="button-group">
          <button className="sidebar-button" onClick={handleOpenForm}>
            {formIsOpen ? "Close" : "Add note"}
          </button>
          {notes.length > 0 && (
            <button className="sidebar-button" onClick={handleDeleteAllNotes}>
              Clear all notes
            </button>
          )}
        </div>
        <Stats notes={notes} />
      </div>
      <div className="main">
        {formIsOpen && <FormAddNote onAddNote={handleAddNote} />}
        {selectedNote && (
          <NoteDetails
            selectedNote={selectedNote}
            onDeleteNote={handleDeleteNote}
            onToggleNote={handleToggleNote}
          />
        )}
      </div>
    </div>
  );
}
