import {SET_CURRENT_ANCHOR_ACTION, SET_CURRENT_PAGE_ACTION, SET_SEARCH_INPUT_ACTION} from './navigation.constants';

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

export const setSearchInputAction = (searchInput) => ({
    type: SET_SEARCH_INPUT_ACTION,
    payload: {searchInput}
});
