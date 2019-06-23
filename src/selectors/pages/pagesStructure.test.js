import {TEST_PAGES_DATA} from '../../tests/pages/testPagesData';
import {filteredPagesStructureSelector, pagesStructureSelector} from './pagesStructure';

const state = {
    pages: {
        ...TEST_PAGES_DATA
    },
    navigation: {
        searchInput: "abc"
    }
};

const structure = [
    {
        id: "p1",
        level: 0,
        children: [
            {
                id: "p2",
                level: 1,
                children: []
            },
            {
                id: "p3",
                level: 1,
                children: []
            }
        ]
    }
];

const filteredStructure = [
    {
        id: "p1",
        level: 0,
        children: [
            {
                id: "p2",
                level: 1,
                children: []
            }
        ]
    }
];

describe('PagesStructure selectors', () => {

    it('pagesStructureSelector generates correct structure', () => {
        expect(pagesStructureSelector(state))
            .toEqual(structure);
    });

    it('filteredPagesStructureSelector', () => {
        expect(filteredPagesStructureSelector(state))
            .toEqual(filteredStructure);
    });
});
