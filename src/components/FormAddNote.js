import { useState } from "react";

export function FormAddNote({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("work");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !content.trim()) return;

    const id = crypto.randomUUID();

    const newNote = {
      id,
      title: title.trim(),
      content: content.trim(),
      type,
      isDone: false,
    };

    onAddNote(newNote);

    setTitle("");
    setContent("");
    setType("work");
  }

  return (
    <form className="form-add-note" onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Content</label>
      <textarea
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <label>Type</label>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="work">Work</option>
        <option value="home">Home</option>
        <option value="other">Other</option>
      </select>

      <button className="form-button">Add note</button>
    </form>
  );
}
