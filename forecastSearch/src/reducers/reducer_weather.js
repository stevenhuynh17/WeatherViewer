// Reducers are just functions
import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      // Always return a new state, do not modify it. 
      // return state.concat([action.payload.data]); << Same thing as below
      return [ action.payload.data, ...state];
  }
  return state;
}