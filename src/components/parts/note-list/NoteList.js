import './note-list.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {useEffect, useState} from "react";
import {connect} from "react-redux";
import notesReducer from "../../../reducers/notes-reducer";
import {Button} from "@mui/material";

const NoteList = props => {

  // const [loaded, setLoaded] = useState(false);
  // const [notes, setNotes] = useState([]);
  //
  // let url = new URL("http://localhost:8080/api/v1/note");
  // let params = [
  //   // ['userid', props.userid]
  //   ['userid', 'asdfasdf']
  // ];
  // url.search = new URLSearchParams(params).toString();
  //
  // useEffect(
  //   () => {
  //     if (!loaded) {
  //       fetch(url)
  //       .then(res => res.json())
  //       .then(jsonResponse => setNotes(jsonResponse))
  //       .then(() => setLoaded(true))
  //     }
  //   }
  // );

  return (
    <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
      <Button id="newNoteBtn">+ Note</Button>
      <nav aria-label="main mailbox folders">
        <List>
          {
            props.notes != null && props.notes.length > 0
              ? props.notes.map(
              (note, index) => (
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={note.title} id={"note-" + index} note-index={index} />
                  </ListItemButton>
                </ListItem>
              ),
              )
              : <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="No Notes"/>
                </ListItemButton>
              </ListItem>
          }
        </List>
      </nav>
    </Box>
  );
}
// export default NoteList;

const mapStateToProps = (state) => {
  return { notes: state.notes };
}

export default connect(mapStateToProps)(NoteList);