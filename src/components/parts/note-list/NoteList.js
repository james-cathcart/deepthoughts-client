import './note-list.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {connect} from "react-redux";
import {Button} from "@mui/material";
import {createNewNote, fetchNotesAction, updateCurrentNote} from "../../../actions";
import {useEffect} from "react";
import {useState} from "react";

const NoteList = props => {

  const [loaded, setLoaded] = useState(false);

  const onNewNoteClick = () => {
    console.log("dispatching new note action")
    props.dispatch(
      createNewNote()
    );
    console.log(props.notes);
  };

  const onNoteClick = (note) => {
    console.log("changing to note with ID: ", note.id)
    props.dispatch(
      updateCurrentNote(note)
    );
  };

  useEffect(() => {
    if (!loaded) {
      props.dispatch(fetchNotesAction());
      setLoaded(true);
    }
  }, [loaded, props]);

  return (
    <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
      <Button id="newNoteBtn" onClick={onNewNoteClick}>+ Note</Button>
      <nav aria-label="main mailbox folders">
        <List>
          {
            props.notes != null && Object.entries.length > 0
              ? Object.entries(props.notes).map(
              ([key, value]) => (
                <ListItem key={key} disablePadding>
                  <ListItemButton>
                    <ListItemText
                      primary={value.body.split("\n")[0].replace(/<\/?[^>]+(>|$)/g, "").substr(0, 25)}
                      onClick={() => onNoteClick(value)}
                    />
                  </ListItemButton>
                </ListItem>
              ),
              )
              : <ListItem key="nilkey" disablePadding>
                <ListItemButton>
                  <ListItemText key="nilkey" primary="No Notes"/>
                </ListItemButton>
              </ListItem>
          }
        </List>
      </nav>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {notes: state.notes};
}

export default connect(mapStateToProps)(NoteList);