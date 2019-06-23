import {SET_SEARCH_INPUT_ACTION} from '../../actions/navigation/navigation.constants';

const initialState = '';

export const searchInput = (state = initialState, action = {}) => {
    const {type, payload} = action;

    switch (type) {
        case SET_SEARCH_INPUT_ACTION: {
            const {searchInput} = payload;
            return searchInput;
        }
        default:
            return state;
    }
};
