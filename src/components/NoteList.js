import { Note } from "./Note";

export function NoteList({ notes, onSelection, selectedId }) {
  if (notes.length === 0) {
    return (
      <p>
        Currently you don't have any notes. Add a new note using the button
        below.
      </p>
    );
  }

  return (
    <ul>
      {notes.map((note) => (
        <Note
          note={note}
          key={note.id}
          onSelection={onSelection}
          selectedId={selectedId}
        />
      ))}
    </ul>
  );
}
