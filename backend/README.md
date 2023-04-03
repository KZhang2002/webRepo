# Backend Documentation

This file describes the API calls we have defined.

## Misc

### GET `/`

Send a blank request to this endpoint and it will return a Hello World!

## Users

### GET `/users`

Send a blank request to this endpoint and it will return a list of all users with all their attributes.

### GET `/user/:email`

Send a query to this endpoint to get information about a user. For example, /user/johndoe@gmail.com will get information about the user with the email

### GET `/user/auth`

Send a query to this endpoint with a user's email and password to get an auth token. The auth token is currently useless.

### POST `/user`

Post a query to this endpoint with values for parameters `email`, `password`, `first_name`, and `last_name` to create a user.

### PUT `/users/clear` (dev only, should not be implemented in GUI)

Send a blank request to this endpoint to clear all users from the database.

## Listings

### GET `/listings`

Send a blank request to this endpoint and it will return a list of all listings with all their attributes.

### POST `/listing`

Post a query to this endpoint with values for parameters `title`, `price`, `seller`, `desc`, and `img` to create a listing.

The seller parameter should have the email of the seller who is posting the listing. In the future, instead of the seller parameter, we will use the auth token provided in a header to decide whose listing it is.
