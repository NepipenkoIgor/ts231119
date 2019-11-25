import { sum } from './functions';

describe('Sum function', () => {
    it('should return right value', () => {
        expect(sum(1, 2, 3)).toEqual(6);
        expect(sum( '1', '2', '3')).toEqual(6);
        expect(sum()).toEqual(0);
        expect(sum(0, 1, 2)).toEqual(3);
        expect(sum(0, '1', 2)).toEqual(3);
    })
});
