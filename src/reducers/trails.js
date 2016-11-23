import { getTrailIndex } from '../common.js';

function trails(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log("Incrementing Likes!!", state, action);
      const i = getTrailIndex(action.index, state);
      console.log('index = ', i)
      return [
        ...state.slice(0,i), // before the one we are updating
        {
          ...state[i], 
          likes: 
          state[i].likes + 1
        },
        ...state.slice(i + 1), // after the one we are updating
      ]
    default:
      return state;
  }
}

export default trails;
