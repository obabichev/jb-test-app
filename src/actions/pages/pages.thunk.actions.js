import {getPagesListRequest} from '../../service/pagesService';
import {setPagesDataAction} from './pages.actions';
import {
    finishNavigationLoadingAction,
    startNavigationLoadingAction
} from '../loading/loading.actions';

export const uploadPagesDataAction = () => (dispatch, getState) => {
    dispatch(startNavigationLoadingAction());
    return getPagesListRequest()
        .then(data => {
            dispatch(setPagesDataAction(data));
            dispatch(finishNavigationLoadingAction())
        });
};