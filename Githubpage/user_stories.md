## Users
### Sign Up
* As an unregistered and unauthorized user, I want to be able to sign up for the website via a sign-up form.
   * When I'm on the `/signup` page:
      * I would like to be able to enter my email, username, and preferred password on a clearly laid out form.
      * I would like the website to log me in upon successful completion of the sign-up form.
         * So that I can seamlessly access the site's functionality
   * When I enter invalid data on the sign-up form:
      * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
         * So that I can try again without needing to refill forms I entered valid data into.
### Log in
* As a registered and unauthorized user, I want to be able to log in to the website via a log-in form.
   * When I'm on the `/login` page:
       * I would like to be able to enter my email and password on a clearly laid out form.
       * I would like the website to log me in upon successful completion of the log-in form.
            * So that I can seamlessly access the site's functionality
   * When I enter invalid data on the log-up form:
      * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
          * So that I can try again without needing to refill forms I entered valid data into.
### Demo User
* As an unregistered and unauthorized user, I would like an easy to find and clear demo user button on both the `/signup` and `/login` pages to allow me to visit the site as a guest without signing up or logging in.
   * When I'm on either the `/signup` or `/login` pages:
      * I can click on a Demo User button to log me in and allow me access as a normal user.
         * So that I can test the site's features and functionality without needing to stop and enter credentials.
### Log Out
* As a logged in user, I want to log out via an easy to find log out button on the navigation bar.
   * While on any page of the site:
      * I can log out of my account and be redirected to a page displaying APIs.
         * So that I can easily log out to keep my information secure.

## APIs
### Viewing APIs
* As a logged in or logged out user, I want to be able to view APIs
   * When I am on the `/` page:
      * I can view ten random APIs
         * So I can read the description and learn about various APIs
* As a logged in or logged out user, I want to be able to view a specific API
     * When I am on the `/apis/:id` page
        * I can read its description, reviews, and ratings
        * I can click to the API's website (a tag with href to api's docs)
           * So I can learn more about a specific API

## Toolbox
### Create Toolboxes
  * As a logged in user, I want to be able to create custom Toolboxes
     * When I'm on the `/create-toolbox` page:
        * I can create a new API toolbox
           * So I can organize APIs

### Viewing Toolboxes
 * As a logged in user, I want to be able to view all my Toolboxes from the homepage
    * When I'm on the `/` page:
       * I can see and click on all of my Toolboxes from the homepage
          * So I can see my organized list of Toolboxes and quickly navigate to one
   * When I'm on the `/users/:toolboxId` page:
      * I can see all the APIs in my Toolbox
         * So I can see an organized list of specific APIs I've added to the Toolbox
### Update Toolbox
 * As a logged in user, I want to be able to modify a Toolbox
    * When I'm on the `/users/:toolboxId` page:
       * I can edit the Toolbox (update the name or add/remove APIs to the Toolbox)
          * So I can make any necessary adjustments to the Toolbox
### Delete Toolbox
 * As a logged in user I want to be able to delete the Toolboxes I've created
    * When I'm on the `/users/:toolboxId` page:
       * I can click "Delete" to delete a Toolbox I previously created
          * So I can easily delete unwanted Toolboxes


## Reviews
### Create Reviews
  * As a logged in user, I want to be able to create reviews
     * When I'm on the `/apis/:id` page I can click "create review" to:
        * take me to `/reviews/create` page to create review
           * So I can submit a review

### Viewing Reviews
 * As a logged in user, I want to be able to view all reviews for APIs
    * When I'm on the `/apis/:id` page:
       * I can see all reviews
          * So I can an informed decision about using an API
### Update Reviews
 * As a logged in user, I want to be able to modify a review
    * When I'm on the `/reviews/:id/update` page:
       * I can change my review
          * So I can fix any errors or add anything new I came across

### Delete Reviews
 * As a logged in user I want to be able to delete the reviews I've created
    * When I'm on the `/apis/:id` page:
       * I can click delete
          * So I can delete the review for the specific API

## Implementation Status
### Create Implementation Status
  * As a logged in user, I want to be able to create an Implementation Status for an API
     * When I'm on the `/apis/:id` page:
        * I can click the implementation button
           * So I can select its status
### Viewing Implementation Status
 * As a logged in user, I want to be able to view the Implementation Status for APIs
     * When I'm on the `/apis/:id` page:
        * I can view the implementation button
           * So I can see status
### Update Implementation Status
 * As a logged in user, I want to be able to modify an Implementation Status
     * When I'm on the `/apis/:id` page:
        * I can click the implementation button
           * So I can update its status 
