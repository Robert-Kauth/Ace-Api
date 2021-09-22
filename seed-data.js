const

const seedData = [
    {
        name: "Intellexer",
        url: "http://esapi.intellexer.com/?ref=apilist.fun",
        free: false,
        description: "Intellexer API is a cloud service that enables developers to embed natural language processing and text analysis tools in consumer and enterprise applications, or web-services using JSON or XML. Intellexer API includes natural language processing solutions for sentiment analysis, entity recognition, summarization, document comparison, natural language interface for search engines, language detection, spell-checking, etc. Intellexer API methods can be called from any programming language or software component that supports HTTP requests.",
        logo_url: "https://res.cloudinary.com/dan-purcell-2021/image/upload/v1631912855/aceapi-assets/Intellexer_giczuh.png",
        tags_id: "1",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "API2Cart",
        url: "https://api2cart.com/",
        free: false,
        description: "API2Cart is a unified API to integrate your eCommerce software with 40+ shopping platforms like Magento, Shopify, eBay, etc. We provide SDK and detailed documentation to help you connect multiple shopping carts and marketplaces in one go. Work with all needed data from your clients' stores like products, orders, shipments, customers and baskets. Integrate your SaaS app startup with Magento, Shopify, WooCommerce and other shopping platforms that we support at once.",
        logo_url: "https://res.cloudinary.com/dan-purcell-2021/image/upload/v1631912747/aceapi-assets/API2Cart_zzmvet.png",
        tags_id: "2",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "stream",
        url: "https://getstream.io/",
        free: false,
        description: "The #1 Chat API for Custom Messaging Apps. Build real-time chat messaging in less time. Rapidly ship in-app messaging with our highly reliable chat infrastructure and feature-rich SDKs. Drive in-app conversion, engagement, and retention. Our enterprise-ready activity feed APIs are used by hundreds of large companies so they can grow without worrying about the scalability, maintenance and reliability of a complicated news feed infrastructure.",
        logo_url: "https://res.cloudinary.com/dan-purcell-2021/image/upload/v1631913638/aceapi-assets/stream_aosgw7.png",
        tags_id: "3",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "ScrapingBee",
        url: "https://www.scrapingbee.com/",
        free: false,
        description: "Tired of getting blocked while scraping the web? ScrapingBee API handles headless browsers and rotates proxies for you. Thanks to our large proxy pool, you can bypass rate limiting website, lower the chance to get blocked and hide your bots! For SEO, keyword monitoring or backlink checking. Scraping search engine result pages is extremely painful because of rate limits. ScrapingBee works great for general web scraping tasks like real estate scraping, price-monitoring, extracting reviews without getting blocked.",
        logo_url: "https://res.cloudinary.com/dan-purcell-2021/image/upload/v1631914029/aceapi-assets/ScrapingBee_wu3a0b.png",
        tags_id: "4",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "PDFShift",
        url: "https://pdfshift.io/",
        free: false,
        description: "Stop wasting time implementing and maintaining a third-party software/library. With PDFShift, rely on an up-to-date, high-fidelity conversion API with no maintenance costs. We believe that developers should focus their time on things that matter, not setting up yet another PDF library. Because we eliminate needless complexity and provide an up-to-date service, you can get up and running with PDFShift in just a couple of minutes.",
        logo_url: "https://res.cloudinary.com/dan-purcell-2021/image/upload/v1631914142/aceapi-assets/PDFShift_elrovc.png",
        tags_id: "5",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Apache Cordova REST API",
        url: "https://cordova.apache.org/",
        free: false,
        description: "Apache Cordova provides device APIs that allow a mobile app developer to access native device functions from JavaScript. This, combined with a UI framework allows a smartphone app to be developed with just HTML, CSS, and JavaScript. The Cordova APIs assist in apps being built without any native code from the app developer. Instead, web technologies are used, and they are hosted in the app itself locally.",
        logo_url: "https://res.cloudinary.com/dan-purcell-2021/image/upload/v1631918234/aceapi-assets/ApacheCordova-resized_annzsx.png",
        tags_id: "1",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "DialogTech",
        url: "https://apidocs.dialogtech.com/",
        free: false,
        description: "The DialogTech API retrieves conversational intelligence data driven by artificial intelligence. DialogTech API offers REST architecture with XML responses. The interface is accessible via HTTP and compatible with any programming language that makes web-service calls. DialogTech provides solutions for marketing to convert calls into service appointments and support dialogue.",
        logo_url: "https://res.cloudinary.com/dan-purcell-2021/image/upload/v1632341761/aceapi-assets/DialogTechAPI-resized_iihg9v.png",
        tags_id: "1",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Google Analytics Metadata REST API",
        url: "https://developers.google.com/analytics/devguides/reporting/metadata/v3/",
        free: true,
        description: "The Google Analytics Metadata API returns a list of columns and their attributes from the Google Analytics reporting APIs. Column attributes are Analytics View (profile) dimensions and metrics. The API uses HTTP GET with JSON for returns/responses. Use the Metadata API to get attributes like UI name, description, segments, or support, or to discover new columns.",
        logo_url: "https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg",
        tags_id: "12",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Pixlab REST API",
        url: "https://pixlab.io/home",
        free: true,
        description: "Process and analyze input media images or video content using the PixLab Rest API. It uses built-in HTTP capabilities for passing parameters and authentication that responds with standard HTTP response codes. It allows you to process, transform and filter any images from any programming language with machine vision and deep learning APIs. The API returns JSON by default or BLOB Image Content on demand, with results for Image Processing, Machine Vision and Media Analysis. This includes; facedetect, tagimg, facelookup, encrypt, decrypt and more. PixLab provides media storage with scalable and unified RESTful APIs for media analysis and processing tasks.",
        logo_url: "https://pixlab.io/images/pix.png",
        tags_id: "5",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Infobip REST API",
        url: "https://www.infobip.com/docs/api",
        free: false,
        description: "The Infobip APIs allow for integration tools that aim to utilize Infobip products and services in a single place. Infobib has five different APIs; HTTP SMS API, Voice API, OMNI Channel API, Factor Authentication API, Number Lookup API and the Social Invites API. All APIs use REST standards, which enables browser based accessibility for URLs. The API intends to be able to work with all programming languages.",
        logo_url: "https://www.infobip.com/docs/assets/img/docs-new/icons/ic-logo.svg",
        tags_id: "7",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "ID Analyzer",
        url: "https://developer.idanalyzer.com/coreapi.html",
        free: false,
        description: "ID Analyzer offers identity verification with face & data verification, document authentication, and image cropping functions. The ID Analyzer Core API enables users to upload an image or document and get a JSON response of extracted data, authentication, and biometric verification. The API allows users to submit both front and back of a document in one API call, and data obtained from both sides will be aggregated into a single response.",
        logo_url: "https://www.idanalyzer.com/img/logo-blue.png",
        tags_id: "6",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "SuperTokens",
        url: "https://supertokens.io/docs/ios/sending-requests",
        free: false,
        description: "The SuperTokens API enables developers to integrate session management functionalities with their applications to prevent and detect attacks. SuperTokens supports biometrics, SMS or Email OTP, short and long lived tokens, refreshing sessions, Token theft detection, and Secret Key rotation. SuperTokens effectively implements Refresh Token Rotation as per the IETF RFC 6819 standard, and JSON Web Token sign-in Key Rotations.",
        logo_url: "https://supertokens.io/img/logoWithNameLight.svg",
        tags_id: "6",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "TypingDNA",
        url: "https://api.typingdna.com/index.html",
        free: false,
        description: "The TypingDNA API matches typing patterns in order to authenticate a user. Typing behavior is captured using JavaScript, and pattern matching results are returned in JSON format, letting the developer know whether or not the typing patterns belong to the same user. This API can be used for secure login, enforcing reset passwords, and online biometric authentication.",
        logo_url: "https://api.typingdna.com/img/typingdna-logo-blue.svg",
        tags_id: "6",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "ThumbSignIn",
        url: "https://www.programmableweb.com/sites/default/files/styles/article_profile_150x150/public/icon_gravityforms.png?itok=a7Baeze_",
        free: false,
        description: "ThumbSignIn provides two-factor authentication (2FA), and passworless, biometric strong authentication services. The ThumbSignIn Web API enables developers to integrate the service, with methods to register and authenticate users, get transaction status, get device and user ids, and more.",
        logo_url: "https://dh8nazij9b948.cloudfront.net/49b67ef7.png",
        tags_id: "6",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "jQuery",
        url: "http://api.jquery.com/",
        free: false,
        description: "jQuery, the JavaScript library that aims to simplify web design, offers an API to use in multiple browsers. Add and manage elements, events, callbacks and more with the API. Developers can work with JSON protocol and access with API Key. Along with the main API, alternative APIs available include jQuery UI, jQuery Mobile, and jQuery Unit.",
        logo_url: "https://static.jquery.com/files/rocker/images/logo_jquery_215x53.gif",
        tags_id: "10",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "YouTube",
        url: "https://developers.google.com/youtube/",
        free: false,
        description: "The Data API allows users to integrate their program with YouTube and allow it to perform many of the operations available on the website. It provides the capability to search for videos, retrieve standard feeds, and see related content. A program can also authenticate as a user to upload videos, modify user playlists, and more. This integration can be used for a variety of uses such as developing a web application allowing users to upload video to YouTube, or a device or desktop application that brings the YouTube experience to a new platform. The Data API gives users programmatic access to the video and user information stored on YouTube. This can be used to personalize a web site or application with the user's existing information as well as perform actions like commenting on and rating videos. This RESTful API provides responses in XML format.",
        logo_url: "https://developers.google.com/site-assets/logo-youtube.svg",
        tags_id: "10",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Ziwo",
        url: "https://documenter.getpostman.com/view/1450071/RWToNwzB",
        free: false,
        description: "The Ziwo API provides programmatic access to a cloud call center solution. With the API, developers can implement agents, groups, positions, queues, numbers, roles, settings, dynamic routers, and call trackers. The API returns data in JSON format, using a token to authenticate the interface. Ziwo provides a cloud call center & contact center platform.",
        logo_url: "https://www.ziwo.io/wp-content/uploads/2020/08/logo.png",
        tags_id: "10",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Amazon Product Advertising",
        url: "https://webservices.amazon.com/paapi5/documentation",
        free: false,
        description: "The Amazon Product Advertising API provides access to Amazon product data such as the items for sale, customer reviews, seller reviews and others. The functions that have been updated for version 5.0 offer features for: the addition of several SDKs in popular languages to integrate signing the request, request serialization and response de-serialization, faster response times and more. This API was previously known as the eCommerce Service and was renamed the Product Advertising API. It provides a way to retrieve product information and expose Amazon's product data and e-commerce functionality to leverage Amazon Product Discovery features. Amazon is an Ecommerce, Business and Web Service Platform that provides cloud computing and electronic commerce, and is one of the largest Internet-based retailers globally.",
        logo_url: "https://d15ljbth6loks9.cloudfront.net/assets/logos/paapi5_documentation_logo.png",
        tags_id: "2",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "PayPal",
        url: "https://developer.paypal.com/",
        free: false,
        description: "PayPal offers online payment solutions and has more than 153 million customers worldwide. The PayPal API makes powerful functionality available to developers by exposing various features of the PayPal platform. Functionality includes but is not limited to invoice management, transaction processing and account management.",
        logo_url: "https://www.parentmail.co.uk/wp-content/uploads/2014/06/PayPal-new-logo.jpg",
        tags_id: "2",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Groupon",
        url: "http://partner-api.groupon.com/help/deal-api",
        free: false,
        description: "Groupon features a daily deal on the best stuff to do, see, eat, and buy in a variety of cities across the United States. Groupon gets discounts you won't find anywhere else through the power of group buying. The goal of Groupon API is to allow applications to directly interact with Groupon via a REST API.",
        logo_url: "https://partner-api.groupon.com/help/img/GPN-logo-03.png",
        tags_id: "2",
        createdAt: new Date(),
        updatedAt: new Date()
    },
]

const tags = [
    {
        name: "Artificial Intelligence--1", //dan
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "eCommerce--2", //rob
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Chat Technology--3", //dan
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Data Mining--4", //jack
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Analytics--5", //max
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Biometrics--6", //rob
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Security--7", //max
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Big Data--8", //dan
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Sports--9", //jack
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Plugins-10", //rob
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Music-11", //jack
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Metadata-12", //max
        createdAt: new Date(),
        updatedAt: new Date()
    },
]



// {
//     name: "Google Analytics Metadata REST API",
//     url: "https://developers.google.com/analytics/devguides/reporting/metadata/v3/",
//     free: true,
//     description: "The Google Analytics Metadata API returns a list of columns and their attributes from the Google Analytics reporting APIs. Column attributes are Analytics View (profile) dimensions and metrics. The API uses HTTP GET with JSON for returns/responses. Use the Metadata API to get attributes like UI name, description, segments, or support, or to discover new columns.",
//     logo_url: "https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg",
//     tags_id: "12",
//     createdAt: new Date(),
//     updatedAt: new Date()
// },
// {
//     name: "Pixlab REST API",
//     url: "https://pixlab.io/home",
//     free: true,
//     description: "Process and analyze input media images or video content using the PixLab Rest API. It uses built-in HTTP capabilities for passing parameters and authentication that responds with standard HTTP response codes. It allows you to process, transform and filter any images from any programming language with machine vision and deep learning APIs. The API returns JSON by default or BLOB Image Content on demand, with results for Image Processing, Machine Vision and Media Analysis. This includes; facedetect, tagimg, facelookup, encrypt, decrypt and more. PixLab provides media storage with scalable and unified RESTful APIs for media analysis and processing tasks.",
//     logo_url: "https://pixlab.io/images/pix.png",
//     tags_id: "5",
//     createdAt: new Date(),
//     updatedAt: new Date()
// },
// {
//     name: "Infobip REST API",
//     url: "https://www.infobip.com/docs/api",
//     free: false,
//     description: "The Infobip APIs allow for integration tools that aim to utilize Infobip products and services in a single place. Infobib has five different APIs; HTTP SMS API, Voice API, OMNI Channel API, Factor Authentication API, Number Lookup API and the Social Invites API. All APIs use REST standards, which enables browser based accessibility for URLs. The API intends to be able to work with all programming languages.",
//     logo_url: "https://www.infobip.com/docs/assets/img/docs-new/icons/ic-logo.svg",
//     tags_id: "7",
//     createdAt: new Date(),
//     updatedAt: new Date()
// },
// {
//     name: "",
//     url: "",
//     free: false,
//     description: "",
//     logo_url: "",
//     tags_id: "",
//     createdAt: new Date(),
//     updatedAt: new Date()
// },
