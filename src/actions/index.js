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
      currentNote: note
    }
  };
}

// const onNewNoteClick = () => {
//   props.dispatch({
//     type: 'NEW_NOTE',
//   })
// };
//
// const onNoteClick = (event) => {
//
//   props.dispatch({
//     type: 'CURRENT_NOTE',
//     payload: {
//       currentNote: nextCurrentNote
//     }
//   })
// };