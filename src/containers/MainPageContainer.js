import {connect} from 'react-redux';
import {MainPage} from '../components/MainPage/MainPage';
import {withUrlFromRouter} from './withUrlFromRouter';
import {selectedMenuItemSelector} from '../selectors/navigation/navigation';
import {uploadPagesDataAction} from '../actions/pages/pages.thunk.actions';
import {isNavigationLoading} from '../selectors/loading/loading';
import {filteredPagesStructureSelector} from '../selectors/pages/pagesStructure';

const mapStateToProps = (state, props) => ({
    pagesStructure: filteredPagesStructureSelector(state),
    selectedMenuItem: selectedMenuItemSelector(state),
    isLoading: isNavigationLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
    uploadPagesData: () => dispatch(uploadPagesDataAction())
});

export const MainPageContainer = withUrlFromRouter(
    connect(mapStateToProps, mapDispatchToProps)(MainPage)
);
