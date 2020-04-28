export default (state = {}, action) => {
  switch (action.type) {
  case 'ADD_POST':
    const{title, time, votes, id} = action;
    return Object.assign({}, state, {
      [id]:{
        title: title,
        time: time,
        votes: votes,
        id: id
      }
    });

  case 'DELETE_POST':
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};
