import './note-list.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {connect} from "react-redux";
import {Button} from "@mui/material";
import {createNewNote, updateCurrentNote} from "../../../actions";

const NoteList = props => {

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

  // The following Object.entries(...) block is for debugging purposes only:
  // Object.entries(props.notes).forEach( ([key, value]) => {
  //   console.log("key: " + key + " value: " + value);
  //   Object.entries(value).forEach(
  //     (childKey, childValue) => {
  //       console.log("\tchildKey: " + childKey + "\n\tchildValue: " + childValue)
  //     });
  // } );

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
  return { notes: state.notes };
}

export default connect(mapStateToProps)(NoteList);