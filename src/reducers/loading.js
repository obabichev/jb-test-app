import {FINISH_LOADING_ACTION, START_LOADING_ACTION} from '../actions/loading/loading.constants';

const initialState = {};

export const loading = (state = initialState, action = {}) => {
    const {type, payload} = action;

    switch (type) {
        case START_LOADING_ACTION: {
            const {loaderId} = payload;

            return {
                ...state,
                [loaderId]: true
            }
        }
        case FINISH_LOADING_ACTION: {
            const {loaderId} = payload;

            return {
                ...state,
                [loaderId]: false
            }
        }
        default:
            return state;
    }
};
