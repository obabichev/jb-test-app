import {connect} from 'react-redux';
import {NavigationSearchComponent} from '../../components/navigation/NavigationSearchComponent/NavigationSearchComponent';
import {searchInputSelector} from '../../selectors/navigation/navigation';
import {setSearchInputAction} from '../../actions/navigation/navigation.actions';

const mapStateToProps = (state) => ({
    searchInput: searchInputSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    setSearchInput: value => dispatch(setSearchInputAction(value))
});

export const NavigationSearchContainer = connect(mapStateToProps, mapDispatchToProps)(NavigationSearchComponent);
