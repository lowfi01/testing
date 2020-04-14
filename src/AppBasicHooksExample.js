// EXAMPLE CODE FOR BASIC HOOKS
// -- useState
// -- useEffect  ( componentDidMount, ComponentDidUpdate(targeted), ComponentDidUnmount )

import React, {useState, useEffect} from 'react';


// Notes Example
const App = () => {
  const [notes, setNotes] = useState([]) // simple state can use useState
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  // ComponentDidmount, use localStorage to populate notesData
  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem('notes'))
    if (notesData) {
        setNotes(notesData)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const addNote = (e) => {
      e.preventDefault()
      setNotes([
          ...notes,
          { title, body }
      ])
      setTitle('')
      setBody('')
  }

  const removeNote = (title) => {
    if (title !== ''){
      setNotes(notes.filter((note) => note.title !== title))
    }
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
      // - return effect on unmount
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

// // Counter example
// const App = (props) => {
//   const [ count, setCount ] = useState(props.count); // allow props to define default value
//   const [ text, setText ] = useState("");

//   // UseEffect, replaces the older life cycle methods
//   //  - component did mount
//   //  - component did update
//   //  - component did unmount (reference notes app)

//   // useEffect(() => {
//   //   // this runs on all updates, componentDidUpdate
//   //   // - triggers: state, props
//   //   console.log("use effect on update of all states or props")
//   // })

//   // useEffect, componentDidMount
//   // - triggers: will trigger once on mount and never again
//   useEffect(() => {
//     console.log("this shoudl only run once!!!!!!!!");
//   }, [])

//   // useEffect hook, allows use to specify when method will trigger
//   // - triggers: can be defined within array
//    useEffect(() => {
//     console.log("run when defined states or props are triggered")
//   }, [count])

//   // Increment count list
//   const increment = () => {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <p>The current {text || 'count'} {count}</p>

//       <button onClick={increment}>+1</button>
//       <button onClick={() => setCount(0)} >Reset</button>
//       <button onClick={() => setCount(count -1)}>-1</button>
//       <input value={text} onChange={(e) => setText(e.target.value)} type="text"/>
//     </div>
//   )
// }

export default App;
