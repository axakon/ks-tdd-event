export const subscribeToNewsletter = (email) => {
  const isValidEmailAddress = (email) => {
    const isFromUK = (email) => email.slice(-6) === '.co.uk';
    if (isFromUK(email)) {
      return false;
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  if (isValidEmailAddress(email)) {
    // TODO: sendEmailToBackend();
    return true;
  }
  return false;
};
