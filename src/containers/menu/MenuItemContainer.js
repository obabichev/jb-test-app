import {connect} from 'react-redux';
import {MenuItemComponent} from '../../components/menu/MenuItemComponent/MenuItemComponent';
import {menuItemByPageIdSelector} from '../../selectors/navigation/navigation';
import {setCurrentPageAction} from '../../actions/navigation/navigation.actions';
import {anchorsByPageIdSelector} from '../../selectors/pages/anchors';

const mapStateToProps = (state, props) => ({
    menuItem: menuItemByPageIdSelector(state, props),
    anchors: anchorsByPageIdSelector(state, props)
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentPage: (pageId) => dispatch(setCurrentPageAction(pageId)),
});

export const MenuItemContainer = connect(mapStateToProps, mapDispatchToProps)(MenuItemComponent);
