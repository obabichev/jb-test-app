import {connect} from 'react-redux';
import {MenuAnchorComponent} from '../components/MenuItemComponent/MenuAnchorComponent';
import {anchorByAnchorIdSelector} from '../selectors/pages/anchors';
import {setCurrentAnchorAction} from '../actions/navigation/navigation.actions';
import {isAnchorSelectedSelector} from '../selectors/navigation/navigation';

const mapStateToProps = (state, props) => ({
    anchor: anchorByAnchorIdSelector(state, props),
    isAnchorSelected: isAnchorSelectedSelector(state, props)
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentAnchor: (anchorId) => dispatch(setCurrentAnchorAction(anchorId))
});

export const MenuAnchorContainer = connect(mapStateToProps, mapDispatchToProps)(MenuAnchorComponent);
