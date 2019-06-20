import {menuItemByPageIdSelector, pageIdByUrlSelector, selectedMenuItemSelector} from './navigation';

const state = {
    navigation: {
        selectedPage: "test-selected-page-id"
    },
    pages: {
        pages: {
            "test-id": {
                id: "test-id",
                title: "test-title",
                url: "test-url"
            }
        }
    }
};

describe('Navigation selector', () => {
    it('selectedMenuItemSelector', () => {
        expect(selectedMenuItemSelector(state))
            .toEqual("test-selected-page-id");
    });

    it('menuItemByPageIdSelector', () => {
        expect(menuItemByPageIdSelector(state, {pageId: "test-id"}))
            .toEqual(state.pages.pages["test-id"]);
    });

    it('pageIdByUrlSelector', () => {
        expect(pageIdByUrlSelector(state, {url: "test-url"}))
            .toEqual("test-id");
    });

    it('pageIdByUrlSelector, check for wrong url', () => {
        expect(pageIdByUrlSelector(state, {url: "wrong-test-url"}))
            .toEqual(null);
    });

    it('pageIdByUrlSelector, check for empty url', () => {
        expect(pageIdByUrlSelector(state, {}))
            .toEqual(null);
    });
});