import pages from './pages';

export const getPagesListRequest = async () => {
    const {entities, topLevelIds} = pages;
    return {...entities, topLevelIds};
};