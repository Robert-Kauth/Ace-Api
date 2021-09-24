'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Reviews', [
     {
       user_id: 3,
       api_id: 1,
       review: "This Google Analytics Metadata REST API works too well.",
       rating: 5
     },
     {
       user_id: 2,
       api_id: 2,
       review: "heard about this on instrumental country radio, decided to give it a try.",
       rating: 3
     },
     {
       user_id: 3,
       api_id: 2,
       review: "This Pixlab REST API works too well. It nonchalantly improves my baseball by a lot.",
       rating: 4
     },
     {
       user_id: 4,
       api_id: 1,
       review: "My co-worker Mitchell has one of these. He says it looks dry.",
       rating: 2
     },
     {
      user_id: 12,
      api_id: 1,
      review: "This Google Analytics Metadata REST API, does exactly what it's suppose to do.",
      rating: 5
    },
    {
      user_id: 2,
      api_id: 10,
      review: "talk about contentment!!!",
      rating: 5
    },
    {
      user_id: 3,
      api_id: 10,
      review: "one of my hobbies is drawing. and when i'm drawing this works great.",
      rating: 5
    },
    {
      user_id:10,
      api_id: 26,
      review:"My neighbor Lonnie has one of these. She works as a hobbit and she says it looks microscopic.",
      rating: 4
    },
    {
      user_id: 9,
      api_id: 15,
      review:"one of my hobbies is guitar. and when i'm playing guitar this works great.",
      rating: 3
    },
    {
      user_id: 8,
      api_id: 44,
      review:"heard about this on powerviolence radio, decided to give it a try.",
      rating: 1
    },
    {
      user_id: 8,
      api_id: 7,
      review:"heard about this on songo radio, decided to give it a try.",
      rating: 4
    },
    {
      user_id: 6,
      api_id: 44,
      review:"one of my hobbies is piano. and when i'm playing piano this works great.",
      rating: 4
    },
    {
      user_id: 14,
      api_id: 14,
      review:"i use it once in a while when i'm in my ring.",
      rating: 3
    },
    {
      user_id: 3,
      api_id: 3,
      review:"My penguin loves to play with it.",
      rating: 4
    },
    {
      user_id: 7,
      api_id: 7,
      review:"heard about this on rebetiko radio, decided to give it a try.",
      rating:2
    },
    {
      user_id:11,
      api_id: 7,
      review:"i use it centenially when i'm in my greenhouse.",
      rating: 3
    },
    {
      user_id: 12,
      api_id: 12,
      review:"It only works when I'm Cook Islands.",
      rating:2
    },
    {
      user_id: 2,
      api_id: 35,
      review:"heard about this on dance-rock radio, decided to give it a try.",
      rating:3
    },
    {
      user_id: 9,
      api_id: 29,
      review:"My neighbor Zoa has one of these. She works as a scribe and she says it looks wide.",
      rating: 3
    },
    {
      user_id: 8,
      api_id: 29,
      review:"i use it barely when i'm in my store.",
      rating: 2
    },
    {
      user_id: 11,
      api_id: 35,
      review:"i use it until further notice when i'm in my station.",
      rating: 4
    },
    {
      user_id: 6,
      api_id: 11,
      review:"i use it daily when i'm in my courthouse.",
      rating: 3
    },
    {
      user_id: 3,
      api_id: 17,
      review:"heard about this on wonky radio, decided to give it a try.",
      rating: 2
    },
    {
      user_id: 2,
      api_id: 38,
      review: "i use it biweekly when i'm in my greenhouse.",
      rating: 3
    },
    {
      user_id: 13,
      api_id: 13,
      review:"i use it barely when i'm in my store.",
      rating: 2
    },
    {
      user_id: 15,
      api_id: 49,
      review:"one of my hobbies is skateboarding. and when i'm skateboarding this works great.",
      rating: 4
    },
    {
      user_id: 15,
      api_id: 4,
      review:"My gentoo penguin loves to play with it.",
      rating: 4
    },
    {
      user_id: 13,
      api_id: 44,
      review:"My peacock loves to play with it.",
      rating: 4
    },
    {
      user_id: 4,
      api_id: 44,
      review:"i use it profusely when i'm in my garage.",
      rating: 3
    },
    {
      user_id: 12,
      api_id: 31,
      review:"one of my hobbies is sailing. and when i'm sailing this works great.",
      rating: 4
    },
    {
      user_id: 7,
      api_id: 21,
      review:"heard about this on ndombolo radio, decided to give it a try.",
      rating: 3
    },
    {
      user_id: 15,
      api_id: 21,
      review:"one of my hobbies is toy collecting. and when i'm collecting toys this works great.",
      rating: 4
    },
    {
      user_id: 9,
      api_id: 5,
      review:"My macaroni penguin loves to play with it.",
      rating: 5
    },
    {
      user_id: 13,
      api_id: 19,
      review:"talk about optimism!!!",
      rating: 5
    },
    {
      user_id: 12,
      api_id: 12,
      review:"My raven loves to play with it.",
      rating: 4
    },
    {
      user_id: 9,
      api_id: 10,
      review:"heard about this on ndombolo radio, decided to give it a try.",
      rating: 1
    },
    {
      user_id: 3,
      api_id: 3,
      review:"heard about this on wonky radio, decided to give it a try.",
      rating: 5
    },
    {
      user_id: 2,
      api_id: 23,
      review:"It only works when I'm Heard Island and McDonald Islands.",
      rating: 2
    },
    {
      user_id: 6,
      api_id: 18,
      review:"My beagle loves to play with it.",
      rating: 3
    },
    {
      user_id: 2,
      api_id: 2,
      review:"My co-worker Aurthur has one of these. He says it looks white.",
      rating: 3
    }
   ], {});
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('Reviews', null, {});
  }
};
