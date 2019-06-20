import {SET_CURRENT_ANCHOR_ACTION, SET_CURRENT_PAGE_ACTION} from './navigation.constants';

export const setCurrentPageAction = (pageId) => ({
    type: SET_CURRENT_PAGE_ACTION,
    payload: {
        pageId
    }
});

export const setCurrentAnchorAction = (anchorId) => ({
    type: SET_CURRENT_ANCHOR_ACTION,
    payload: {
        anchorId
    }
});
