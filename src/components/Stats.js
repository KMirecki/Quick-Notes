export function Stats({ notes }) {
  const numNotes = notes.length;

  if (numNotes === 0) {
    return (
      <footer>
        <p>Add some notes to see your progress!</p>
      </footer>
    );
  }

  const numDone = notes.filter((note) => note.isDone).length;
  const percentage =
    notes.length > 0 ? Math.round((numDone / numNotes) * 100) : 0;

  return (
    <footer>
      {percentage === 100 ? (
        <p>You have finished all tasks. Congratulations!</p>
      ) : (
        <p>
          You have completed {numDone} tasks out of {numNotes} ({percentage}%)
        </p>
      )}
    </footer>
  );
}
