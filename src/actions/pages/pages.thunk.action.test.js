import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {uploadPagesDataAction} from './pages.thunk.actions';
import {NAVIGATION_LOADER} from '../loading/loaders';
import {FINISH_LOADING_ACTION, START_LOADING_ACTION} from '../loading/loading.constants';
import {SET_PAGES_DATA_ACTION} from './pages.constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


jest.mock('../../service/pagesService', () => ({
    getPagesListRequest: async () => ({data: 'test'})
}));

describe('Pages thunk action', () => {
    it('uploadPagesDataAction', async () => {
        const store = mockStore({todos: []});

        const expectedActions = [
            {type: START_LOADING_ACTION, payload: {loaderId: NAVIGATION_LOADER}},
            {type: SET_PAGES_DATA_ACTION, payload: {data: 'test'}},
            {type: FINISH_LOADING_ACTION, payload: {loaderId: NAVIGATION_LOADER}}
        ];

        return store.dispatch(uploadPagesDataAction()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    });
});