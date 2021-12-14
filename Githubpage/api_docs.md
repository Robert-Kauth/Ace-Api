# API-Routes

This web app uses the following API routes to dynamically update the page to create a single-page-app-like feel for the user for specific features.


## `/reviews`
A logged in user may delete one of their reviews and remove it from the page's list of visible reviews without causing the page to refresh.
* `DELETE /reviews/:id`

## `/implementations`
A logged in user may select an implementation status for an api that will persist in their toolbox
* `POST /implementations/:id`
* `DELETE /implementations/:id`

## `/toolboxes`
A logged in user may delete a toolbox
* `DELETE /users/:toolboxId`
