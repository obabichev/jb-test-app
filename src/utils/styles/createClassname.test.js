import {createClassname} from './createClassname';

describe('createClassname', () => {
    it('combine classnames', () => {
        expect(createClassname({
            "class1": true,
            "class2": true
        }))
    })
});
