import {connect} from 'react-redux';
import {MainPage} from '../components/MainPage/MainPage';
import {pagesStructureSelector} from '../selectors/pages/pagesStructure';
import {withUrlFromRouter} from './withUrlFromRouter';
import {pageIdByUrlSelector, selectedMenuItemSelector} from '../selectors/navigation/navigation';
import {uploadPagesDataAction} from '../actions/pages/pages.thunk.actions';
import {isNavigationLoading} from '../selectors/loading/loading';

const mapStateToProps = (state, props) => ({
    pagesStructure: pagesStructureSelector(state),
    selectedPageId: pageIdByUrlSelector(state, props),
    selectedMenuItem: selectedMenuItemSelector(state),
    isLoading: isNavigationLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
    uploadPagesData: () => dispatch(uploadPagesDataAction())
});

export const MainPageContainer = withUrlFromRouter(
    connect(mapStateToProps, mapDispatchToProps)(MainPage)
);