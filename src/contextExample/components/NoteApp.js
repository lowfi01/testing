import React, {useEffect, useReducer} from 'react';

import notesReducer from '../reducers/notes';
import NotesContext from '../context/notes-context';

import Notelist from './NotesList';
import AddNoteForm from './AddNoteForm';



// Context API example
const NoteApp = () => {
  const [notes, notesDispatch] = useReducer(notesReducer, []);

  // ComponentDidmount, use localStorage to populate notesData
  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'))
    if (notes) {
        notesDispatch({ type: 'POPULATE_NOTES', notes})
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])


  return (
      <NotesContext.Provider value={{notes, notesDispatch}}>
          <h1>Notes</h1>
          <Notelist />
          <AddNoteForm />
      </NotesContext.Provider>
  )
}

export { NoteApp as default }
