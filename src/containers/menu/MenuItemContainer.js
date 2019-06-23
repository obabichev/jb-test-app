import {connect} from 'react-redux';
import {MenuItemComponent} from '../../components/navigation/MenuItemComponent/MenuItemComponent';
import {menuItemByPageIdSelector} from '../../selectors/navigation/navigation';
import {setCurrentAnchorAction, setCurrentPageAction} from '../../actions/navigation/navigation.actions';
import {anchorsByPageIdSelector} from '../../selectors/pages/anchors';

const mapStateToProps = (state, props) => ({
    menuItem: menuItemByPageIdSelector(state, props),
    anchors: anchorsByPageIdSelector(state, props)
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentPage: (pageId) => dispatch(setCurrentPageAction(pageId)),
    setCurrentAnchor: (anchorId) => dispatch(setCurrentAnchorAction(anchorId))
});

export const MenuItemContainer = connect(mapStateToProps, mapDispatchToProps)(MenuItemComponent);
