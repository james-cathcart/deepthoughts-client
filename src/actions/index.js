import * as api from "../api";

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
      edited: note.edited,
      created: note.created,
    }
  };
}

export function saveNoteChangeAction(currentNote, newBody) {
  console.log("creating action: save note changes: ", newBody);

  let updatedNote = {
    id: currentNote.id,
    body: newBody,
    edited: currentNote.edited,
    created: currentNote.created,
  }

  return {
    type: 'SAVE_NOTE_CHANGES',
    payload: {
      id: updatedNote.id,
      body: updatedNote.body,
      edited: updatedNote.edited,
      created: updatedNote.created,
    }
  }
}

export function fetchNotesSucceededAction(notes) {
  return {
    type: 'FETCH_NOTES_SUCCEEDED',
    payload: { ...notes },
  };
}

export function fetchNotesAction() {

  return dispatch => {
    api.fetchNotes().then(resp => {
      dispatch(fetchNotesSucceededAction(resp.data));
    });
  };
}
