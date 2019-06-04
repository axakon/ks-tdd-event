import React, { useState } from 'react';
import { subscribeToNewsletter } from './apiCalls';

const NewsletterSubscription = ({}) => {
  const [emailInput, setInput] = useState('');
  const handleSubmit = (e) => {
    subscribeToNewsletter(emailInput);
    e.preventDefault();
  };
  return (
      <form onSubmit={handleSubmit}>
        <input type="email" onChange={e => setInput(e.target.value)}/>
        <button>SUBSCRIBE NOW!</button>
      </form>
  );
};

NewsletterSubscription.propTypes = {};

export default (NewsletterSubscription);
