# News letter subscription

## Problem description

**Laughter Inc.** is a Dutch company and they have created the best news letter ever. Where they, on a weekly basis, sends out the best **Brexit** jokes on the internet. 

Their process is very manual today, each subscriber signs up by typing their email into a subreddit and the administrators manually type their email into the system.

Now, to help **Laughter Inc.** increase their subscriber count, they need help with creating a website which can remove this manual labour.

Create a webb application, which, given an email, will sign up a user to a weekly news letter service.

## Stage 1

The backend people have **fallen behind**, which means you will have to complete this stage without actually hooking up a real backend.

1. We need to display a page with an input field and a subscribe button.
   1. Clicking the subscribe button should subscribe the user
1. Our backend is very poor and will try to subscribe to any text-input, verify that each email is valid (xxxx@xxxx.xxx)
   1. Only allow emails
   1. Don't allow **co.uk** top-level domains, wouldn't want to piss off the Brits.

## Stage 2 - Backend is here!

1. The backend people are finished!
You can now hook up the backend for real, at **[PUT]** www.backend.com/api/newsletter/subscribe
1. We're getting lots of complaints that **co.uk** don't understand why they can't subscribe. Display an information text whenever **co.uk** is detected.

## Stage 3 - New feature!

1. Seniors are having trouble understanding electronic mails, automatically detect if the input is a **phone number** to subscribe to our **Brexit** joke of the week.
