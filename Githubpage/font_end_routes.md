# indexRouter
## Home Page Route
- This route display the home page, which will display all APIs in the database. For logged in users, it will also display their Toolboxes:
  - `GET /`

## Login Routes
- These routes display a login page with a submit button that also contains a separate demo button to access site as a logged in demo user:
  - `GET /login`
  - `POST /login`
  - `POST /demo`

## Sign Up Routes
- These routes display a sign-up form, which when submitted creates a new user in the database:
  - `GET /signup`
  - `POST /signup`

## Logout Route
- This route logs out the currently logged in user:
  - `POST /logout`

---

# apiRouter
## Individual Api page
- These routes display a page that contains info about a specific api and contains a button to create a new review, which displays a form to create a review for the specific Api:
  - `GET /apis/:id`
  - `/apis/:id/create_review`

a drop down select to add the API to a specified toolbox.
- If a review belonging to the logged in user is present then edit/delete buttons will also be present:
# reviewRouter
## Review form
`/reviews`

- `GET /reviews/create`
- `POST /reviews/create`

## `/create-toolbox`

This page displays a form to create a custom toolbox

- `GET /create-toolbox`
- `POST /create-toolbox`

## `/users/:toolboxId`

This page displays a user's custom toolbox contents

- `GET /users/:toolboxId`
- `POST /users/:toolboxId` <-- for toolbox name edit

## `/reviews/:id/update`

This page allows a user to modify reviews

- `GET /reviews/:id/update`
- `POST /reviews/:id/update`
