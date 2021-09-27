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

---

# reviewRouter
## Reviews form
- This route allows a logged in user to submit a review:
  - `POST /reviews`
- If a review belonging to the logged in user is present then edit/delete buttons will also be present on the individual Api page that utilize the following routes for updating and submitting the review form:
  - `GET /reviews/:id/update`
  - `POST /reviews/:id/update`
  - `DELETE /reviews/:id`

---

# toolboxesrouter / api_toolboxes
## Toolbox Routes
- Only logged in users can create custom toolboxes. Unlogged in users are redirected to the login page.
- These routes display a page containing a feed of all the Api's in all of a logged in users toolboxes. When a specific toolbox is clicked on in the toolbox nav bar a page is rendered that displays only the Api's in that specific toolbox:
  - `GET /toolboxes`
  - `GET /toolboxes/:toolboxId`
- These routes display a form to create a custom toolbox when the user clicks on the create a custom toolbox link in the toolbox nav bar:
  - `GET toolboxes/create-toolbox`
  - `POST toolboxes/create-toolbox`
- This route allows the deletion of a custom a toolbox from the My toolboxes feed:
  - `DELETE /api_toolboxes`

---

# implementationRouter
## Api Implementation Routes
- When a logged in user is on an individual Api page they can see the current implementation status of the Api and update it:
  - `POST /implementations`
- When a logged in user is viewing their toolbox feed they can click on a button to remove it's implementation status:
  - `DELETE /implementations`

---

# searchRouter
## Search Page Route
- The search page is rendered when a user utilizes the search bar in the header nav bar. It will search the database for an Api based on name or tag:
  - `GET /search`


---
// Old FrontEnd Routes:

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
