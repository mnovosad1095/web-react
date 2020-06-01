// import {combineReducers} from 'redux';
import { ADD_CHORD, TOGGLE_CHORD } from './actions';


function chords(state = [], action) {
  switch (action.type) {
    case ADD_CHORD:
      return [
        ...state,
        {
          name: action.name,
          playing: false
        }
      ];
    case TOGGLE_CHORD:
      return state.map((chord, index) => {
        if (index === action.index) {
          return Object.assign({}, chord, {
            playing: !chord.playing
          })
        }
        return chord;
      });
    default:
      return state;
  }
}

export default chords;