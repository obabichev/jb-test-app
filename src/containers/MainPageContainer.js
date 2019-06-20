import {connect} from 'react-redux';
import {MainPage} from '../components/MainPage/MainPage';
import {setPagesDataAction} from '../actions/pages/pages.actions';
import {pagesStructureSelector} from '../selectors/pages/pagesStructure';
import {withUrlFromRouter} from './withUrlFromRouter';
import {pageIdByUrlSelector, selectedMenuItemSelector} from '../selectors/navigation/navigation';

const mapStateToProps = (state, props) => ({
    pagesStructure: pagesStructureSelector(state),
    selectedPageId: pageIdByUrlSelector(state, props),
    selectedMenuItem: selectedMenuItemSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    setPagesData: pagesData => dispatch(setPagesDataAction(pagesData))
});

export const MainPageContainer = withUrlFromRouter(
    connect(mapStateToProps, mapDispatchToProps)(MainPage)
);