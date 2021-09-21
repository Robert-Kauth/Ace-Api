'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Apis', [
      {name: "Google Analytics Metadata REST API",url: "https://developers.google.com/analytics/devguides/reporting/metadata/v3/",free: true,description: "The Google Analytics Metadata API returns a list of columns and their attributes from the Google Analytics reporting APIs. Column attributes are Analytics View (profile) dimensions and metrics. The API uses HTTP GET with JSON for returns/responses. Use the Metadata API to get attributes like UI name, description, segments, or support, or to discover new columns."},
      {name: "Pixlab REST API",url: "https://pixlab.io/home",free: true,description: "Process and analyze input media images or video content using the PixLab Rest API. It uses built-in HTTP capabilities for passing parameters and authentication that responds with standard HTTP response codes. It allows you to process, transform and filter any images from any programming language with machine vision and deep learning APIs. The API returns JSON by default or BLOB Image Content on demand, with results for Image Processing, Machine Vision and Media Analysis. This includes; facedetect, tagimg, facelookup, encrypt, decrypt and more. PixLab provides media storage with scalable and unified RESTful APIs for media analysis and processing tasks.",},
      {name: "Infobip REST API",url: "https://www.infobip.com/docs/api",free: false,description: "The Infobip APIs allow for integration tools that aim to utilize Infobip products and services in a single place. Infobib has five different APIs; HTTP SMS API, Voice API, OMNI Channel API, Factor Authentication API, Number Lookup API and the Social Invites API. All APIs use REST standards, which enables browser based accessibility for URLs. The API intends to be able to work with all programming languages."}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Apis', null, {});
  }
};
