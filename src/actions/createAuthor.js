function createAuthor(id, name) {
  return {
    type: 'ADD_AUTHOR',
    id: id,
    name: name
  }
}

export default createAuthor
