import React from 'react';
import { mount } from 'enzyme';
import NewsletterSubscription from './NewsletterSubscription';

const subscribeToNewsLetterComponent = mount(<NewsletterSubscription />);

describe('Input field', function () {
  it('should render an input field without failing', function () {
    expect(subscribeToNewsLetterComponent.find('input').exists()).toBeTruthy();
  });
  it('should only have 1 input field', function () {
    expect(subscribeToNewsLetterComponent.find('input')).toHaveLength(1);
  });
  it('should be of type email', function () {
    expect(subscribeToNewsLetterComponent.find('input').prop('type')).toBe('email');
  });
});
describe('Subscribe button', function () {
  it('should render a button', function () {
    expect(subscribeToNewsLetterComponent.find('button').exists()).toBeTruthy();
  });
  it('should have a cool text', function () {
    expect(subscribeToNewsLetterComponent.find('button').text()).toBe('SUBSCRIBE NOW!');
  });
});
