import {createSelector} from 'reselect';
import {pagesSelector, topLevelIdsSelector} from './pages';
import {searchInputSelector} from '../navigation/navigation';


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

    let children = [];
    if (page.pages) {
        children = page.pages.map(createTreeStructure(pages));
    }

    return {id, level, children};
};

export const filteredPagesStructureSelector = createSelector(
    pagesStructureSelector,
    pagesSelector,
    searchInputSelector,
    (structure, pages, searchInput) => {
        return structure.map(filterTreeStructure(pages, searchInput)).filter(notEmpty);
    }
);

const filterTreeStructure = (pages, searchInput) => node => {

    let filteredChildren = [];
    if (node.children) {
        filteredChildren = node.children
            .map(filterTreeStructure(pages, searchInput))
            .filter(notEmpty);
    }

    const page = pages[node.id];
    if (page.title.toLowerCase().includes(searchInput.toLowerCase()) || filteredChildren.length > 0) {
        return {
            ...node,
            children: filteredChildren
        }
    }

    return null;
};

const notEmpty = obj => !!obj;
