import {SET_CURRENT_PAGE_ACTION} from '../../actions/navigation/navigation.constants';

const initialState = null;

export const selectedPage = (state = initialState, action = {}) => {
    const {type, payload} = action;

    switch (type) {
        case SET_CURRENT_PAGE_ACTION:
            const {pageId} = payload;
            return pageId;
        default:
            return state;
    }
};
