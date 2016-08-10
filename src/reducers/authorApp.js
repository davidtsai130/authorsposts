const AuthorApp = (state = {authors: [], posts: []}, action) => {
  switch(action.type){
    case 'ADD_AUTHOR':
      return Object.assign({}, state, {authors: [...state.authors, {
        id: action.id,
        name: action.name,
        selected: false
      } ]})
    case 'SELECT_AUTHOR':
      debugger
      return Object.assign({}, state, {authors: [...state.authors, {

        name: action.text,
        selected: true
      } ]})
    default:
      return state
  }
}

export default AuthorApp
