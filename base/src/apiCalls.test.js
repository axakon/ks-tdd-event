import { subscribeToNewsletter } from './apiCalls';

describe('Subscribe to newsletter', function () {
  it('should decline invalid email addresses', function () {
    const invalidEmailAddress = 'hejhej';
    expect(subscribeToNewsletter(invalidEmailAddress)).toBeFalsy();
  });
  it('should accept valid email addresses', function () {
    const validEmailAddress = 'hej@hej.com';
    expect(subscribeToNewsletter(validEmailAddress)).toBeTruthy();
  });
  it('should fail if from co.uk', function () {
    const validEmailAddress = 'hej@bbc.co.uk';
    expect(subscribeToNewsletter(validEmailAddress)).toBeFalsy();
  });
});
