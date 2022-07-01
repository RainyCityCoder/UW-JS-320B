//Reducer part 

//reducers take in prev. state & actions (ea. action is an obj.)
// action = { type: 'actionType' }

export const INCREMENT = 'COUNTER/INCREMENT';
export const DECREMENT = 'COUNTER/DECREMENT';

export function incrementAction() {
  return { type: INCREMENT };
}

export function decrementAction() {
  return { type: DECREMENT };
}

export function counterReducer(state=0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}