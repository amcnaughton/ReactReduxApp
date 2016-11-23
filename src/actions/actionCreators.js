// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// add update
export function addUpdate(trail, user, comment, status) {
  console.log(...arguments)
  return {
    type: 'ADD_UPDATE',
    trail,
    user,
    comment,
    status
  }
}

// remove update
export function removeUpdate(postId, i) {
  return {
    type: 'REMOVE_UPDATE',
    i,
    postId
  }
}
