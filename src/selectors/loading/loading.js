import {NAVIGATION_LOADER} from '../../actions/loading/loaders';

export const isNavigationLoading = (state) => !!state.loading[NAVIGATION_LOADER];
