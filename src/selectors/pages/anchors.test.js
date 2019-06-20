import {anchorByAnchorIdSelector, anchorsByPageIdSelector} from './anchors';

const state = {
    pages: {
        pages: {
            "p1": {
                anchors: ["a1", "a2"]
            }
        },
        anchors: {
            "a1": {
                id: "a1"
            },
            "a2": {
                id: "a2"
            },
            "a3": {
                id: "a3"
            }
        }
    }
};

describe('Anchors selectors', () => {
    it('anchorsByPageIdSelector', () => {
        const props = {pageId: "p1"};
        expect(anchorsByPageIdSelector(state, props))
            .toEqual([state.pages.anchors['a1'], state.pages.anchors['a2']]);
    });

    it('anchorByAnchorIdSelector', () => {
        const props = {anchorId: "a1"};
        expect(anchorByAnchorIdSelector(state, props))
            .toEqual({id: "a1"});
    });
});