function updates(state = [], action) {
  switch(action.type) {

    case 'ADD_UPDATE':
      // return the new state with the new update
      return [
        ...state,
        {
          trail_id: +action.trail,
          user_id: action.user,
          comment: action.comment,
          status: action.status,
          timestamp: Math.floor(Date.now() / 1000)
        }
      ];
    default:
      return state;
  }
}

export default updates;
