import emailValidator from './emailValidator';

describe('Email validator', () => {
    it('should contain an error text', () => {
        expect(emailValidator.text).toBeDefined();
    });

    it.each([
        ['adsads', false],
        ['321321', false],
        ['+46760153513', false],
        ['myemail.test@email.com', true],
        ['memyail1234532@mail.tz', true]
    ])(
        '%s should validate to: %p',
        (input, expected) => {
            expect(emailValidator.check(input)).toBe(expected);
        }
    );

    it('should block co.uk emails', () => {
        expect(emailValidator.check('english@email.co.uk')).toBeFalsy();
    });
});