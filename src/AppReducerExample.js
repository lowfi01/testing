// EXAMPLE CODE FOR useReducer
// -- basically the same as redux reducer
// Note - useState has a dependencie on useReducer
//      - useReducer is great for complex state situations


import React, {useState, useEffect, useReducer} from 'react';


// This is similar to how redux implements reducers
const notesReducer = (state, action) => {
  switch(action.type) {
    case 'REMOVE_NOTE':
      var removeNoteState = state.filter(n => n.title !== action.title);
      return removeNoteState;
    case 'ADD_NOTE':
      var addNoteState =
      [...state,
        {
          title: action.title,
          body: action.body
        }
      ]
      return addNoteState;
    case 'POPULATE_NOTES':
      return action.notes;
    default:
      return state;
  }
}


// Notes Example
const AppReducerExample = () => {
  const [notes, notesDispatch] = useReducer(notesReducer, []); // complex state can use reducers
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'))
    if (notes) {
        // setNotes(notesData)
        notesDispatch({ type: 'POPULATE_NOTES', notes})
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const addNote = (e) => {
      e.preventDefault()
      notesDispatch({
        type: 'ADD_NOTE',
        title,
        body
      })
      // setNotes([
      //     ...notes,
      //     { title, body }
      // ])
      setTitle('')
      setBody('')
  }

  const removeNote = (title) => {
    if (title !== ''){
      notesDispatch({
        type: 'REMOVE_NOTE',
        title
      })
    }
    // setNotes(notes.filter((note) => note.title !== title))
  }

  return (
      <div>
          <h1>Notes</h1>
          {notes.map((note, i) => (
            <Note key={i} note={note} removeNote={removeNote}/>
          ))}
          <p>Add note</p>
          <form onSubmit={addNote}>
              <input value={title} onChange={(e) => setTitle(e.target.value)} />
              <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
              <button>add note</button>
          </form>
      </div>
  )
}

// Lets create a Note function to look at ComponentDidUnmount
const Note = ({note, removeNote}) => {

  // ComponentDidUnmount
  useEffect(() => {
    console.log("Setting up note effect!");

    return () => {
      // this function will trigger on unmount!!!!!!!!!
      console.log("component unmounted")
    }


  }, [])

  return (
    <div key={note.title}>
                  <h3>{note.title}</h3>
                  <p>{note.body}</p>
                  <button onClick={() => removeNote(note.title)}>x</button>
    </div>
  )
}


export default AppReducerExample;
