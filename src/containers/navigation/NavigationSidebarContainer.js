import {connect} from 'react-redux';
import {NavigationSidebarComponent} from '../../components/navigation/NavigationSidebarComponent';
import {setCurrentPageAction} from '../../actions/navigation/navigation.actions';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    setCurrentPage: (id) => dispatch(setCurrentPageAction(id))
});

export const NavigationSidebarContainer = connect(mapStateToProps, mapDispatchToProps)(NavigationSidebarComponent);
