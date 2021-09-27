# `/`

**Home Page**

This page displays home, which will display all APIs in the database. For logged in users, it will also display their Toolboxes
* `GET /`

## `/login`

**Login Page**

This page displays a login page with a separate demo button to access site as a logged in demo user
* `GET /login`
* `Post /login`
* `POST /login/demo`

## `/signup`

**Sign Up Page**

This page displays a login page
* `GET /signup`
* `Post /signup`
* `POST /signup/demo`

#`/apis`

**Individual Api page**

## `/apis/:id`
This page displays info about a specific api, including a button to edit and delete a user's review and add the API to a toolbox
* `GET /apis/:id`

## `/apis/:id/create_review`
This displays a form to create a review for a specific API

# `/reviews`

**Review form**
* `GET /reviews/create`
* `POST /reviews/create`

## `/create-toolbox`
This page displays a form to create a custom toolbox
* `GET /create-toolbox`
* `POST /create-toolbox`

## `/users/:toolboxId`
This page displays a user's custom toolbox contents
* `GET /users/:toolboxId`
* `POST /users/:toolboxId` <-- for toolbox name edit

## `/reviews/:id/update`
This page allows a user to modify reviews
* `GET /reviews/:id/update`
* `POST /reviews/:id/update`
