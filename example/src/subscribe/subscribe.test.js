import React from 'react'
import {render, fireEvent, cleanup, waitForElement} from '@testing-library/react'
import Subscribe from './subscribe';

const setup = (validator, callback) => {
    const utils = render(
        <Subscribe 
            validator={validator}
            onSubmit={callback}
        />);
    const input = utils.getByLabelText('input-field');
    const submit = utils.getByLabelText('input-submit');
    return {
        input,
        submit,
        ...utils
    };
}

const validator = (text, fn) => {
    return {
        check: fn || jest.fn(),
        text: text || ''
    };
}

describe('Subscribe', () => {
    afterEach(() => {
        cleanup();
    });

    describe('Text input', () => {
        it('should run validator on each input change', () => {
            const mockValidator = validator(null, jest.fn());
            const { input } = setup(mockValidator);
            fireEvent.change(input, { target: { value: 'A' }});
            expect(mockValidator.check.mock.calls.length).toBe(1);
            expect(input.value).toBe('A');
        });

        it('should pass input value to validator', () => {
            const mockValidator = validator(null, jest.fn());
            let mock = jest.fn();
            const { input } = setup(mockValidator);
            fireEvent.change(input, { target: { value: 'A' }});
            expect(mockValidator.check.mock.calls[0][0]).toBe('A');
        });

        it('should not run validator unless input changed', () => {
            const mockValidator = validator(null, jest.fn());
            setup(mockValidator);
            expect(mockValidator.check.mock.calls.length).toBe(0);
        });

        it('should not display validator error if validator true', async () => {
            const { input, queryByText } = setup(validator('Buu fail', () => true));
            fireEvent.change(input, { target: { value: 'A' }});
            expect(queryByText(/Buu fail/i)).toBeNull();
        })

        it('should display validator error if validator false', () => {       
            const { input, getByText } = setup(validator('Buu fail', () => false));
            fireEvent.change(input, { target: { value: 'A' }});
            getByText(/Buu fail/i);
        });

        it('should remove error if input is valid again', () => {
            const { input, getByText, queryByText } = setup(validator('Buu fail', (v) => v === 'AB'));
            fireEvent.change(input, { target: { value: 'A' }});
            getByText(/Buu fail/i);
            fireEvent.change(input, { target: { value: 'AB' }});
            expect(queryByText(/Buu fail/i)).toBeNull();
        });
    });

    describe('Submit button', () => {
        it('should not run props callback if input is empty', () => {
            const fn = jest.fn();
            const { submit } = setup(validator(), fn);
            fireEvent.click(submit);
            expect(fn.mock.calls.length).toBe(0);
        });
        
        it('should not run callback if state is invalid', () => {
            const fn = jest.fn();
            const { input, submit } = setup(validator(null, () => false), fn);
            fireEvent.change(input, { target: { value: 'ab' }});
            fireEvent.click(submit);
            expect(fn.mock.calls.length).toBe(0);
        });

        it('should only run props callback if state is valid', () => {
            const fn = jest.fn();
            const { input, submit } = setup(validator(null, () => true), fn);
            fireEvent.change(input, { target: { value: 'ab' }});
            fireEvent.click(submit);
            expect(fn.mock.calls[0][0]).toBe('ab');
        });
    });
});