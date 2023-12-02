import React from "react";

import type { Note } from "types/Note";

function ViewSingleNote(note: Note) {
  const { title } = note;
  return (
    <div>
      <h1>{title}</h1>
      Some other text
    </div>
  );
}

export default ViewSingleNote;
