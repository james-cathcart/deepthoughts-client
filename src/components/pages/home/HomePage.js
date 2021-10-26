import './homepage.css';
import * as React from 'react';
import NoteList from "../../parts/note-list/NoteList";
import NoteEditor from "../../parts/note-editor/NoteEditor";

const HomePage = props => {

  return (
    <div class="homeContainer">
      <NoteList />
      <NoteEditor />
    </div>
  );

}
export default HomePage;