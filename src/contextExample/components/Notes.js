import React, {useContext} from 'react';

import NoteContext from '../context/notes-context';
import useMousePosition from '../hooks/customhook';

const Note = ({note}) => {
  const {notesDispatch} = useContext(NoteContext);
  const position = useMousePosition();

  const removeNote = (title) => {
    if (title !== ''){
      notesDispatch({
        type: 'REMOVE_NOTE',
        title
      });
    }
  }

  return (
    <div key={note.title}>
        <h3>{note.title}</h3>
        <p>{note.body}</p>
        <p>x: {position.x}, y: {position.y}</p>
        <button onClick={() => removeNote(note.title)}>x</button>
    </div>
  )
}

export default Note;