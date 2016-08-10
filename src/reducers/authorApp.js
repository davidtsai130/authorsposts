const AuthorApp = (state = {authors: [], posts: []}, action) => {
  switch(action.type){
    case 'ADD_AUTHOR':
      return Object.assign({}, state, {authors: [...state.authors, {
        id: action.id,
        name: action.name
      } ]})
    case 'ADD_POST':
      return Object.assign({}, state, {posts: [...state.posts, {
        authorId: action.authorId,
        id: action.id,
        text: action.text
      } ]})
    default:
      return state
  }
}

export default AuthorApp
