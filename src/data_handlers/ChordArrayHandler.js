import { connect } from 'react-redux';
import ChordArray  from "../components/ChordArray";
import { toggle_chord, add_chord } from './actions'

const mapStateToProps = (state, ownProps) => {
  // ownProps.chords.map((chord, index) => dispatch(add_chord(chord)))
  return {
    chords: ownProps.chords
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onChordClick: id => {
      dispatch(toggle_chord(id));
    }
  }
}

const ChordArrayHandler = connect(mapStateToProps, 
                    mapDispatchToProps) (ChordArray)

export default ChordArrayHandler;