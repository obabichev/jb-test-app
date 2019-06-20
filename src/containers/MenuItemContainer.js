import {connect} from 'react-redux';
import {MenuItemComponent} from '../components/MenuItemComponent/MenuItemComponent';
import {menuItemByPageIdSelector} from '../selectors/navigation/navigation';
import {setCurrentPageAction} from '../actions/navigation/navigation.actions';

const mapStateToProps = (state, props) => ({
    menuItem: menuItemByPageIdSelector(state, props)
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentPage: (pageId) => dispatch(setCurrentPageAction(pageId))
});

// const MenuItemWithUrl = withUrlFromRouter(MenuItemComponent);
//
export const MenuItemContainer = connect(mapStateToProps, mapDispatchToProps)(MenuItemComponent);