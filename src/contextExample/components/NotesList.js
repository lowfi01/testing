import React, { useContext } from 'react';

import Note from './Notes';
import NotesContext  from '../context/notes-context'

const NoteList = () => {
  const { notes, removeNote } = useContext(NotesContext);

  return (
    notes.map((note, i) => (
      <Note key={i} note={note} removeNote={removeNote}/>
    ))
  )
}

export { NoteList as default };