import {v4 as uuidv4} from 'uuid';

export function notesReducer(state = {}, action) {

  let currentNote = {};

  function updateNote() {

    let updatedNote = action.payload
    console.log("updated note: ", updatedNote);

    let notes = state.notes.map(note => {
      if (note.id === action.payload.id) {
        console.log("found note, updating...");
        return Object.assign({}, note, action.payload);
      } else {
        return note;
      }
    });

    return {
      ...state,
      notes
    };
  }

  function createNote() {
    let newNote = generateNewNote()
    let notes = [...state.notes];
    notes.push(newNote);
    return {
      ...state,
      notes
    };
  }

  function changeCurrentNote() {
    currentNote = action.payload;
    return {
      ...state,
      currentNote
    };
  }

  function getNotesFromDb() {
    let notes = action.payload;
    currentNote = notes[0];
    console.log("initial fetch current note: ", currentNote);
    return {
      ...state,
      notes,
      currentNote
    };
  }

  switch (action.type) {

    case 'NEW_NOTE':
      console.log("notes reducer -> creating new note");
      return createNote();

    case 'CURRENT_NOTE':
      console.log("notes reducer -> updating current note");
      return changeCurrentNote();

    case 'SAVE_NOTE_CHANGES':
      console.log("notes reducer -> saving note changes...");
      return updateNote();

    case 'FETCH_NOTES_SUCCEEDED':
      console.log("notes reducer -> loading notes from database");
      return getNotesFromDb();

    default:
      console.log("notes reducer -> default action applied as no valid action type observed: ", action.type)
      break;
  }

  return state;
}

function generateNewNote() {
  return {
    id: uuidv4().toString(),
    body: "<h1>New Note</h1>\n<p>Enter text here...</p>",
    created: null,
    edited: null,
  }
}
