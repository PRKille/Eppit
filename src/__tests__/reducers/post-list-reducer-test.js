import postListReducer from '../../reducers/post-list-reducer';

describe('postListReducer', () => {

let action;
  const postData = {
    title: 'glory',
    time: '2020-4-28 14:23:00',
    votes: '12',
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test('should add new post data to masterPostList', () => {

    const {title, time, votes, id} = postData;

    action = {
      type: 'ADD_POST',
      title: title,
      time: time,
      votes: votes,
      id: id
    };
    
    expect(postListReducer({}, action)).toEqual({
      [id]: {
      title: title,
      time: time,
      votes: votes,
      id: id
      }
    });
  });
});