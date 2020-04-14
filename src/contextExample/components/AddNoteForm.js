import React, { useState, useContext } from 'react';

import NotesContext from '../context/notes-context';

const AddNoteForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const { notesDispatch } = useContext(NotesContext)

  const addNote = (e) => {
    e.preventDefault()
    notesDispatch({
      type: 'ADD_NOTE',
      title,
      body
    })

    setTitle('')
    setBody('')
}

 return (
  <>
    <p>Add note</p>
    <form onSubmit={addNote}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
      <button>add note</button>
    </form>
  </>
 )
}

export {AddNoteForm as default}