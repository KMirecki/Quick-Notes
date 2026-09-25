export function Note({ note, onSelection, selectedId }) {
  const isSelected = note.id === selectedId;

  return (
    <li className={isSelected ? "selected" : ""}>
      <h2 style={note.isDone ? { textDecoration: "line-through" } : {}}>
        {note.type === "work" && "💵"}
        {note.type === "home" && "🏠"}
        {note.type === "other" && "🚀"}
        {note.title}
      </h2>
      <button onClick={() => onSelection(note)}>
        {isSelected ? "Close" : "Select"}
      </button>
    </li>
  );
}
