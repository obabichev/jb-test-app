import {SET_CURRENT_ANCHOR_ACTION, SET_CURRENT_PAGE_ACTION} from '../../actions/navigation/navigation.constants';

const initialState = {
    pageId: null,
    anchorId: null
};

export const selectedPage = (state = initialState, action = {}) => {
    const {type, payload} = action;

    switch (type) {
        case SET_CURRENT_PAGE_ACTION:
            const {pageId} = payload;
            return {
                ...state,
                pageId,
                anchorId: state.pageId === pageId ? state.anchorId : null
            };
        case SET_CURRENT_ANCHOR_ACTION:
            const {anchorId} = payload;
            return {
                ...state,
                anchorId
            };
        default:
            return state;
    }
};
