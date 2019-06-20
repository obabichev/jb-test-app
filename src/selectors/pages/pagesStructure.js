import {createSelector} from 'reselect';
import {pagesSelector, topLevelIdsSelector} from './pages';

export const pagesStructureSelector = createSelector(
    pagesSelector,
    topLevelIdsSelector,
    (pages, topLevelIds) => {
        return topLevelIds.map(createTreeStructure(pages));
    }
);

const createTreeStructure = pages => id => {
    const page = pages[id];

    const level = page.level;

    if (!page.pages) {
        return {id, level};
    }

    const children = page.pages.map(createTreeStructure(pages));
    return {id, level, children};
};
