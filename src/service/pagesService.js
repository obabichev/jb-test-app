import pages from './pages';

export const getPagesListRequest = async () => {

    await waitPromise();

    const {entities, topLevelIds} = pages;
    return {...entities, topLevelIds};
};

const waitPromise = () => new Promise(resolve => setTimeout(() => resolve(), 1000));
