import initialState from "../constants/InitialState";
import {v4 as uuidv4} from 'uuid';

export function notesReducer(state = initialState, action) {

  let notes = {};

  switch (action.type) {
    case 'NEW_NOTE':
      console.log("notes reducer -> creating new note");
      let newNote = generateNewNote()
      notes = state.notes;
      notes[newNote.id] = newNote;
      return {
        ...state,
        notes
      };
    // break;
    case 'CURRENT_NOTE':
      console.log("current note: ", state.currentNote)
      console.log("notes reducer -> updating current note: ", action.payload);
      let currentNote = action.payload;
      return {
        ...state,
        currentNote
      };
    // break;

    case 'SAVE_NOTE_CHANGES':
      console.log("saving note changes...");
      notes = state.notes;
      let updatedNote = action.payload
      notes[updatedNote.id] = action.payload;
      return {
        ...state,
        notes
      };
      // break;

    default:
      console.log("notes reducer -> default action applied as no valid action type observed: ", action.type)
      break;
  }

  return state;
}

function generateNewNote() {
  return {
    id: uuidv4().toString(),
    body: "<h1>New Note</h1><p>Enter text here...</p>",
    created: null,
    lastViewed: null,
  }
}
//
// function saveNoteChanges(notes, updatedNote) {
//
//
//
//   let filteredNotes = notes.filter(note => note.id !== updatedNote.id);
//   filteredNotes.push(updatedNote);
//
//   return filteredNotes;
//
// }