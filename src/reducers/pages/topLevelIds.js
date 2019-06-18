import {SET_PAGES_DATA_ACTION} from '../../actions/pages/pages.constants';

const initialState = [];

export const topLevelIds = (state = initialState, action = {}) => {
    const {type, payload} = action;

    switch (type) {
        case SET_PAGES_DATA_ACTION:
            const {topLevelIds} = payload;
            return [...topLevelIds];
        default:
            return state;
    }
};
