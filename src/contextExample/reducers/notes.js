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

export default notesReducer;