import {SET_PAGES_DATA_ACTION} from '../../actions/pages/pages.constants';

const initialState = [];

export const anchors = (state = initialState, action = {}) => {
    const {type, payload} = action;

    switch (type) {
        case SET_PAGES_DATA_ACTION:
            const {anchors} = payload;
            return [...anchors];
        default:
            return state;
    }
};
