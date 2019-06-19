import {SET_PAGES_DATA_ACTION} from '../../actions/pages/pages.constants';

const initialState = {};

export const pages = (state = initialState, action = {}) => {
    const {type, payload} = action;

    switch (type) {
        case SET_PAGES_DATA_ACTION:
            const {pages} = payload;
            return {...pages};
        default:
            return state;
    }
};
