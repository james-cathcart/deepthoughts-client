import './homepage.css';
import * as React from 'react';
import NoteList from "../../parts/note-list/NoteList";
import NoteEditor from "../../parts/note-editor/NoteEditor";
import {useEffect} from "react";

const HomePage = (props) => {

  useEffect( () => {



  });

  return (
    <div className="homeContainer">
      <div className="noteListContainer">
        <NoteList/>
      </div>
      <div className="noteEditorContainer">
        <NoteEditor/>
      </div>
    </div>
  );

}
export default HomePage;
