export function createNewNote() {
  console.log("new note action creator")
  return {
    type: 'NEW_NOTE',
  };
}

export function updateCurrentNote(currentNoteIndex) {
  console.log("update current note action creator")
  return {
    type: 'CURRENT_NOTE',
    payload: currentNoteIndex
  };
}
