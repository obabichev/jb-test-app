import {TEST_PAGES_DATA, TEST_PAGES_STRUCTURE} from '../../tests/pages/testPagesData';
import {pagesStructureSelector} from './pagesStructure';

const state = {
    pages: {
        ...TEST_PAGES_DATA
    }
};

describe('PagesStructure selectors', () => {

    it('pagesStructureSelector generates correct structure', () => {
        expect(pagesStructureSelector(state))
            .toEqual(TEST_PAGES_STRUCTURE);
    });

});
