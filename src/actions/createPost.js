function createPost(authorId, id, text) {
  return {
    type: 'ADD_POST',
    authorId: authorId,
    id: id,
    text: text
  }
}

export default createPost
