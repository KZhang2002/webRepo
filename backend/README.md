# Backend Documentation

This file describes the API calls we have defined.

## Misc

### GET `/`

Send an empty request to this endpoint and it will return a Hello World!

### GET `/createexample` (dev only, should not be implemented in GUI)

Send an empty request to this endpoint to clear all databases and populate them with example entries. Testing and demo only. Basically, just open localhost:8000/createexample in Chrome.

## Users

### GET `/users`

Send an empty request to this endpoint and it will return a list of all users with all their attributes.

### GET `/user/:email`

Send an empty request to this endpoint to get information about a user. For example, `/user/johndoe@gmail.com` will get information about the user with the email `johndoe@gmail.com`

### GET `/user/auth`

Send a query to this endpoint to get an auth token. Where specified, this auth token must be used to authenticate the user for posting or getting certain information.

#### Parameters

The following parameters must be included in the query string:

- `email` (required): A string that contains the user's email.
- `password` (required): A string that contains the user's password.

### POST `/user`

Post a query to this endpoint with values for parameters `email`, `password`, `first_name`, and `last_name` to create a user.

#### Parameters

The following parameters must be included in the query string:

- `email` (required): A string that contains the user's email.
- `password` (required): A string that contains the user's password.
- `first_name` (required): A string that contains the user's first name.
- `last_name` (required): A string that contains the user's last name.

### PUT `/users/clear` (dev only, should not be implemented in GUI)

Send an empty request to this endpoint to clear all users from the database.

## Listings

### GET `/listings`

Send an empty request to this endpoint and it will return a list of all listings with all their attributes.

#### Parameters

The following optional parameters can be included in the request body as JSON:

- `query` (string): a space-separated list of keywords to search for in the title and item description of listings.
- `tags` (array of strings): a list of tags to filter listings by. Only listings that have at least one tag matching the tags in the list will be returned.
- `minPrice` (number): the minimum price for a listing to be returned.
- `maxPrice` (number): the maximum price for a listing to be returned.

### POST `/listing`

Post a query to this endpoint to create a listing.

#### Parameters

The following parameters must be included in the query string:

- `title` (required): A string that contains the title of the listing.
- `price` (required): A float that represents the price of the listing.
- `token` (required): A string that contains the authentication token of the user who created the listing.
- `desc` (required): A string that contains the description of the listing.
- `img` (required): A string that contains the URL of the image associated with the listing.

The following parameters can be included in the query string:

- `tags` (optional): A list of comma-separated strings of tags that the listing should be associated with.

### GET `/listing/:id`

Send a request to this endpoint to get information about a listing. For example, `/listing/42069` will get information about the listing with the ID `42069`.

### POST `/listing/:id/bid`

Post a query to this endpoint with values for parameters `token`, and `bid` to bid on a listing with ID `id`.

#### Parameters

The following parameters must be included in the query string:

- `token` (required): A string that contains the authentication token of the user who bidded.
- `bid` (required): A float that represents the user's bid.

### GET `/listing/:id/bids`

Send a request to this endpoint to get all bids on a listing. For example, `/listing/42069/bids` will get the bids for the listing with the ID `42069`.

### PUT `/listings/clear` (dev only, should not be implemented in GUI)

Send an empty request to this endpoint to clear all listings from the database.

## Reviews

### POST `/user/:email/review`

Post a query to this endpoint with values for parameters `token`, and `review` to review a user with email `email`. For example, `/user/johndoe@smu.edu/review` will post a review for the user with the email `johndoe@smu.edu`.

#### Parameters

The following parameters must be included in the query string:

- `token` (required): A string that contains the authentication token of the user who created the review.
- `review` (required): A string that contains the review.

### GET `/user/:email/reviews`

Send a request to this endpoint to get all reviews on a user. For example, `/user/johndoe@smu.edu/reviews` will get the reviews for the user with the email `johndoe@smu.edu`.
