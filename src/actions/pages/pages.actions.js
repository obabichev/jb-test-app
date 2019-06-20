import {SET_PAGES_DATA_ACTION} from './pages.constants';
import {getPagesListRequest} from '../../service/pagesService';

export const setPagesDataAction = (payload) => ({
    type: SET_PAGES_DATA_ACTION,
    payload
});
