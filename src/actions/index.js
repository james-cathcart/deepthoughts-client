export function createNewNote() {
  console.log("new note action creator")
  return {
    type: 'NEW_NOTE',
  };
}

export function updateCurrentNote(note) {
  console.log("update current note action creator")
  return {
    type: 'CURRENT_NOTE',
    payload: {
      id: note.id,
      body: note.body,
      lastViewed: note.lastViewed,
      created: note.created,
    }
  };
}

export function saveNoteChangeAction(currentNote, newBody) {
  console.log("creating action: save note changes: ", newBody);

  let updatedNote = {
    id: currentNote.id,
    body: newBody,
    lastViewed: currentNote.lastViewed,
    created: currentNote.created,
  }

  return {
    type: 'SAVE_NOTE_CHANGES',
    payload: {
      id: updatedNote.id,
      body: updatedNote.body,
      lastViewed: updatedNote.lastViewed,
      created: updatedNote.created,
    }
  }
}
