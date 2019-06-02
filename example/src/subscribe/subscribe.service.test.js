import { subscribe } from './subscribe.service';

describe('Subscribe service', () => {
    describe('#subscribe', () => {
        const origFetch = window.fetch;

        afterEach(() => {
            window.fetch = origFetch;
        })

        it('should call fetch api', () => {
            const fn = jest.fn();
            window.fetch = fn;
            subscribe();
            expect(fn).toBeCalled();
        });
    });
});