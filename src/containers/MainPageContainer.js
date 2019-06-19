import {connect} from 'react-redux';
import {MainPage} from '../components/MainPage/MainPage';
import {setPagesDataAction} from '../actions/pages/pages.actions';
import {pagesStructureSelector} from '../selectors/pages/pagesStructure';

const mapStateToProps = (state) => ({
    pagesStructure: pagesStructureSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    setPagesData: pagesData => dispatch(setPagesDataAction(pagesData))
});

export const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage);