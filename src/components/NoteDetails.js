export function NoteDetails({ selectedNote, onDeleteNote, onToggleNote }) {
  return (
    <div className="note-summary">
      <h1>{selectedNote.title}</h1>
      <p>{selectedNote.content}</p>
      <div className="button-group">
        <button onClick={() => onToggleNote(selectedNote.id)}>
          {selectedNote.isDone ? "Mark as not done" : "Mark as done"}
        </button>
        <button
          onClick={() => {
            if (window.confirm("Delete this note?"))
              onDeleteNote(selectedNote.id);
          }}>
          Delete
        </button>
      </div>
    </div>
  );
}
