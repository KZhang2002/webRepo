# Backend Documentation

This file describes the API calls we have defined.

## Misc

### GET `/`

Send a blank request to this endpoint and it will return a Hello World!

### GET `/createexample` (dev only, should not be implemented in GUI)

Send a blank request to this endpoint to clear all databases and populate them with example entries. Testing and demo only. Basically, just open localhost:8000/createexample in Chrome.

## Users

### GET `/users`

Send a blank request to this endpoint and it will return a list of all users with all their attributes.

### GET `/user/:email`

Send a request to this endpoint to get information about a user. For example, `/user/johndoe@gmail.com` will get information about the user with the email `johndoe@gmail.com`

### GET `/user/auth`

Send a JSON-formatted body to this endpoint with a user's email and password to get an auth token. The auth token is currently useless.

### POST `/user`

Post a JSON-formatted body to this endpoint with values for parameters `email`, `password`, `first_name`, and `last_name` to create a user.

### PUT `/users/clear` (dev only, should not be implemented in GUI)

Send a blank request to this endpoint to clear all users from the database.

## Listings

### GET `/listings`

Send a blank request to this endpoint and it will return a list of all listings with all their attributes.

### POST `/listing`

Post a JSON-formatted body to this endpoint with values for parameters `title`, `price`, `token`, `desc`, and `img` to create a listing.

### GET `/listing/:id`

Send a request to this endpoint to get information about a listing. For example, `/listing/42069` will get information about the listing with the ID `42069`.

### POST `/listing/:id/bid`

Post a JSON-formatted body to this endpoint with values for parameters `token`, and `bid` to bid on a listing with ID `id`.

### GET `/listing/:id/bids`

Send a request to this endpoint to get all bids on a listing. For example, `/listing/42069/bids` will get the bids for the listing with the ID `42069`.

### PUT `/listings/clear` (dev only, should not be implemented in GUI)

Send a blank request to this endpoint to clear all listings from the database.

## Reviews

### POST `/user/:email/review`

Post a JSON-formatted body to this endpoint with values for parameters `token`, and `review` to review a user with email `email`. For example, `/user/johndoe@smu.edu/review` will post a review for the user with the email `johndoe@smu.edu`.

### GET `/user/:email/reviews`

Send a request to this endpoint to get all reviews on a user. For example, `/user/johndoe@smu.edu/reviews` will get the reviews for the user with the email `johndoe@smu.edu`.




