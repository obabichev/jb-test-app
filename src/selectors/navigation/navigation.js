import {createSelector} from 'reselect';
import {pagesSelector} from '../pages/pages';

export const selectedMenuItemSelector = (state) => state.navigation.selectedPage;

export const pageIdPropSelector = (_, props) => props.pageId;

export const menuItemByPageIdSelector = createSelector(
    pageIdPropSelector,
    pagesSelector,
    (pageId, pages) => {
        const page = pages[pageId];

        const {id, title, url} = page;

        return {id, title, url};
    }
);

export const urlPropSelector = (_, props) => props.url;

export const pageIdByUrlSelector = createSelector(
    urlPropSelector,
    pagesSelector,
    (url, pages) => {
        if (!url) {
            return null;
        }

        for (const key of Object.keys(pages)) {
            const page = pages[key];
            if (page.url === url) {
                return page.id;
            }
        }
        return null;
    }
);
