export const ADD_CHORD = 'ADD_CHORD';
export const TOGGLE_CHORD = 'TOGGLE_CHORD';

export function add_chord (chord) {
  return {type: ADD_CHORD, chord};
}

export function toggle_chord(index) {
  return {type: TOGGLE_CHORD, index};
}