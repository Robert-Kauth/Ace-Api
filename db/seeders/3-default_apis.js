"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Apis",
      [
        {
          name: "Google Analytics Metadata REST API",
          website:
            "https://developers.google.com/analytics/devguides/reporting/metadata/v3/",
          free: true,
          description:
            "The Google Analytics Metadata API returns a list of columns and their attributes from the Google Analytics reporting APIs. Column attributes are Analytics View (profile) dimensions and metrics. The API uses HTTP GET with JSON for returns/responses. Use the Metadata API to get attributes like UI name, description, segments, or support, or to discover new columns.",
          logo_url:
            "https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg",
          tags_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pixlab REST API",
          website: "https://pixlab.io/home",
          free: true,
          description:
            "Process and analyze input media images or video content using the PixLab Rest API. It uses built-in HTTP capabilities for passing parameters and authentication that responds with standard HTTP response codes. It allows you to process, transform and filter any images from any programming language with machine vision and deep learning APIs. The API returns JSON by default or BLOB Image Content on demand, with results for Image Processing, Machine Vision and Media Analysis. This includes; facedetect, tagimg, facelookup, encrypt, decrypt and more. PixLab provides media storage with scalable and unified RESTful APIs for media analysis and processing tasks.",
          logo_url: "https://pixlab.io/images/pix.png",
          tags_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Infobip REST API",
          website: "https://www.infobip.com/docs/api",
          free: false,
          description:
            "The Infobip APIs allow for integration tools that aim to utilize Infobip products and services in a single place. Infobib has five different APIs; HTTP SMS API, Voice API, OMNI Channel API, Factor Authentication API, Number Lookup API and the Social Invites API. All APIs use REST standards, which enables browser based accessibility for URLs. The API intends to be able to work with all programming languages.",
          logo_url:
            "https://www.infobip.com/docs/assets/img/docs-new/icons/ic-logo.svg",
          tags_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ESPN",
          website: "http://www.espn.com/apis/devcenter/docs/",
          free: false,
          description:
            "ESPN.com is an online platform for multiple sports news, statistics, team information, and player information. ESPN.com offers sports scores, standings, and other statistics for a variety of sports. The ESPN.com API allows developers to access and integrate the data of ESPN.com with other applications and to create new applications. Some example API methods include retrieving sports information, team information, and league information. Interested developers should sign up here for an API key: http://developer.espn.com/member/register.",
          logo_url:
            "https://res.cloudinary.com/dt8q1ngxj/image/upload/v1631918832/Ace%20Api/espn_ltf7ry.jpg",
          tags_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Yahoo Fantasy Sports",
          website:
            "https://developer.yahoo.com/fantasysports/guide/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAB4i270ENc0av7HeB33-e_JiLUM-eqmeCdtXNJGEYUImRnor75uXGKoptUjvvK6ixSVnT39um7qmeUiU4JjVtvayjAap7shL8ms-AV8BtSxFVsVO8dUGYulEqOL3eLgTA7eykYhMUtA3ngt5HG0Kiqklb6cj604R9ECDUIDYCo27",
          free: true,
          description:
            "Yahoo Fantasy Sports is the world's largest fantasy sports provider, allowing users to compete against each other using statistics from real-world competitions. The Yahoo Fantasy Sports API provides rich data on leagues, teams and player information. This data can be used to build non-commercial tools and applications that help analyze draft results, review free agents, optimize current rosters, or other apps The Yahoo Fantasy Sports API utilizes the Yahoo Query Language (YQL) as a mechanism to access Yahoo Fantasy Sports data, returning data in XML and JSON formats.",
          logo_url:
            "https://res.cloudinary.com/dt8q1ngxj/image/upload/v1631918913/Ace%20Api/yahoo_zqqb4c.png",
          tags_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "TeamSnap",
          website:
            "https://www.teamsnap.com/documentation/apiv3/getting-started",
          free: true,
          description:
            "The TeamSnap API in REST architecture returns JSON data with team sports managing and organization, including event schedules, tracking payments and fees, areas for team photos, and file sharing.",
          logo_url:
            "https://res.cloudinary.com/dt8q1ngxj/image/upload/v1631918743/Ace%20Api/teamsnap_f9ivd0.png",
          tags_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Global Tennis Network",
          website: "https://www.globaltennisnetwork.com/developers",
          free: true,
          description:
            "The Global Tennis Network is an online community and network for tennis players. The Global Tennis Network helps tennis players and tennis fans set up tennis tournaments and tennis leagues based on the network's tennis ladders, as well as finding other resources on tennis, like court locations and information on tennis equipment. The Global Tennis Network API allows developers to access the functionality and information within the Global Tennis Network. Some example API methods include finding tennis tournaments, ladders, and users, submit challenges to users, and accessing ladder standings.",
          logo_url:
            "https://res.cloudinary.com/dt8q1ngxj/image/upload/v1631919166/Ace%20Api/globaltennis_eambqt.png",
          tags_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "iScore Sports",
          website: "http://api.iscorecentral.com/teamwebsiteapi.html",
          free: false,
          description:
            "iScore sports creates ESPN affiliated apps for baseball/softball, basketball, and football. Additionally, iScore also provides websites and stat-recording services for individual teams of any level. The iScore Sports Team Website API provides those who have purchased an iScore Team Website with a variety of methods for retrieving information from the website. The API allows users to get information about a team's roster, individual games, or player-specific statistics. This API operates over HTTP and returns data as XML. Access is restricted to those with a Team Website account; users can create a password using their iSports account, which must be included in each API call.",
          logo_url:
            "https://res.cloudinary.com/dt8q1ngxj/image/upload/v1631919437/Ace%20Api/iscore_l8oswp.png",
          tags_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sportradar",
          website: "https://sportradar.us/sports-data/",
          free: false,
          description:
            "We are a provider of real-time, accurate sports statistics and sports content. Sportradar's data coverage includes all major U.S. sports, plus hundreds of leagues throughout the world. Data can be retrieved from Sportsradar via their API. This data includes schedules, standings, statistics, play by play, live images...etc The API uses RESTful calls and responses are formatted in XML and JSON respectively.",
          logo_url:
            "https://res.cloudinary.com/dt8q1ngxj/image/upload/v1631921088/Ace%20Api/sportradar_mbtu5x.jpg",
          tags_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "NFL",
          website: "https://developer.nfl.com/get-started/overview",
          free: false,
          description:
            "The NFL API provides users with access to a database of current and past NFL football statistics and game information. The database is updated every minute, even while games are being played. Data is available going back to 2009. The NFL API can provide answers to simple queries or return large data sets for more in-depth use. Users can get unlimited API calls for $10 per month.",
          logo_url:
            "https://res.cloudinary.com/dt8q1ngxj/image/upload/v1631921582/Ace%20Api/nfl_x0wfpc.png",
          tags_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Soccers",
          website: "https://soccersapi.com/",
          free: false,
          description:
            "The Soccers API enables JSON information associated with live-scores, leagues, results, player statistics, player profiles, historical data, bookmakers, and In-Play odds. The API requires Tokens for authentication. This platform features 99.9% availability, accurate statistics, 24/7 support, and a 15-day free trial option.",
          logo_url:
            "https://res.cloudinary.com/dt8q1ngxj/image/upload/v1631922000/Ace%20Api/soccers_ywjjmm.jpg",
          tags_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Golf World",
          website: "http://www.golfworldapi.com/",
          free: false,
          description:
            "The Golf World API retrieves golfer statistics, golf clubs, courses, holes, photos, states, and provinces. Developers can make calls to the API with GET verbs to receive responses in Text and JSON formats.",
          logo_url:
            "https://res.cloudinary.com/dt8q1ngxj/image/upload/v1631922227/Ace%20Api/golfworld_choxff.jpg",
          tags_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fitbit",
          website: "https://dev.fitbit.com/build/reference/web-api",
          free: true,
          description:
            "Fitbit helps people lead healthier, more active lives by empowering them with data, inspiration and guidance to reach their goals. As the leader in the connected health and fitness category, Fitbit designs products and experiences that track everyday health and fitness. The Fitbit Web API enables third-party applications to access and write data on behalf of users.",
          logo_url:
            "https://res.cloudinary.com/dt8q1ngxj/image/upload/v1631922806/Ace%20Api/fitbit_orsp5d.jpg",
          tags_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Import.io",
          website: "https://www.import.io/",
          free: false,
          description:
            "Import.io is easy to use web extraction that puts the world’s data in your hands. The import.io API allows developers to access and integrate the functionality of import.io with other applications. Some example API methods include retrieving data, importing data, extracting data, and managing account information. Sign up for a free trial at https://www.import.io.",
          logo_url:
            "https://res.cloudinary.com/dt8q1ngxj/image/upload/v1631923239/Ace%20Api/importio_vwwnqr.png",
          tags_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Diggernaut",
          website: "https://www.diggernaut.com/dev/api.html",
          free: false,
          description:
            "Diggernaut provides services to turn website content into datasets (web scraping). The Diggernaut API offers programmatic access to manage sessions, projects and diggers.",
          logo_url:
            "https://res.cloudinary.com/dt8q1ngxj/image/upload/v1631923385/Ace%20Api/diggernaut_xxpnuv.png",
          tags_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "WebScrapingAPI",
          website: "https://www.webscrapingapi.com/",
          free: true,
          description:
            "WebScrapingAPI handles all the blocking points that you may encounter when trying to web scrape a website. Collect data from any type of webpage: WebScrapingAPI manages in the backend all possible blocking points such as proxies, Javascript rendering, IP rotations, CAPTCHAs, and many more. Easy to use, easy to customize: Our advanced features allow you to customize your requests based on your specific needs, play with: headers, IP geolocation, sticky sessions, and much more. Lightning-fast scraping, enterprise-grade scaling: Over 10,000+ companies collect 50+ million pages every month on our API. Benefit from high-level professional services using WebScrapingAPI.",
          logo_url:
            "https://res.cloudinary.com/dt8q1ngxj/image/upload/v1631923569/Ace%20Api/webscrape_ayhpe3.png",
          tags_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ScrapeUp",
          website: "https://scrapeup.com/",
          free: false,
          description:
            "ScrapeUp API is a real time proxy API for web scraping. This API enables users to get the HTML from any web page with an API call and handles proxies, browsers, and CAPTCHAs.",
          logo_url:
            "https://res.cloudinary.com/dt8q1ngxj/image/upload/v1631923716/Ace%20Api/scrapeup_btx2yv.png",
          tags_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "SERPMaster",
          website: "https://serpmaster.com/",
          free: false,
          description:
            "ScrapeUp API is a real time proxy API for web scraping. This API enables users to get the HTML from any web page with an API call and handles proxies, browsers, and CAPTCHAs.",
          logo_url:
            "https://res.cloudinary.com/dt8q1ngxj/image/upload/v1631923868/Ace%20Api/serp_e9fc4o.jpg",
          tags_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Datashake",
          website: "https://www.datashake.com/",
          free: false,
          description:
            "Datashake's Web Scraper API lets users scrape the web with proxies, CAPTCHA solving, headless browsers and more to avoid being blocked. It allows customization for fingerprints, stored sessions and 40+ geolocations, and users 30 million IPs in IP rotation to prevent blocks. Developers can register for API and documentation access.",
          logo_url:
            "https://res.cloudinary.com/dt8q1ngxj/image/upload/v1631924049/Ace%20Api/datashake_pcsewu.jpg",
          tags_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "BrandVantage",
          website: "https://brandvantage.co/",
          free: false,
          description:
            "The BrandVantage Webpage API turns ordinary HTML pages to WebPage Schema objects. The WebPage API uses multiple methods, including meta and social tags, microdata and JSON+LD, to identify and set various properties on a WebPage Schema object.",
          logo_url:
            "https://res.cloudinary.com/dt8q1ngxj/image/upload/v1631924390/Ace%20Api/brandvantage_keljrw.png",
          tags_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "LocationsCloud",
          website: "https://www.locationscloud.com/",
          free: false,
          description:
            "LocationsCloud API scrapes data about retail store locations. Data includes store name, store ID, address, geocoordinates, amenities, store hours, payment options, address, email, phone, products and more. Developers need to contact the provider for API and documentation access.",
          logo_url:
            "https://res.cloudinary.com/dt8q1ngxj/image/upload/v1632062327/Ace%20Api/locationscloud_iswopg.png",
          tags_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Scrapingdog",
          website: "https://www.scrapingdog.com/",
          free: false,
          description:
            "Scrapingdog provides fastest web scraping extension with premium proxies, JavaScript Rendering & captcha clearance facility. It is build for everyone whether you are a Developer or Non-Developer. You can directly scrape any website directly from your dashboard or extension if you are a Non-Developer. Just in one click you can use premium proxies to scrape websites which are not easily scrapable. Not just that you can even get JSON response directly from the scraped HTML data by specifying attributes & tags within the tool or API. We have build this tool especially for people in Data-Scientist and Data-Analytics industry. It will help them to extract data at the quickest and then use it in mathematical models. We have focused on every little details of the issues faced by Developers while scraping data in today's world. Well, we are confident that this web scraping tool will help you boost your productivity.",
          logo_url:
            "https://res.cloudinary.com/dt8q1ngxj/image/upload/v1632062496/Ace%20Api/scrapingdog_ncbdgj.png",
          tags_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Proxybot",
          website: "https://proxybot.io/",
          free: false,
          description:
            "Proxybot is widely used for web scraping because it is capable of handling a large number of proxies. It also offers services to handle browser and different security checks like captchas. It is beneficial to scrap the data from any website with a simple API call - no setup needed. Offers proxies located in various geographical locations. Helps to get HTML content from websites built with a Javascript framework. Rotating anonymous IPs making it impossible for websites to detect or block it. Powerful and yet affordable.",
          logo_url:
            "https://res.cloudinary.com/dt8q1ngxj/image/upload/v1632062668/Ace%20Api/proxybot_kkk0rp.png",
          tags_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Spotify",
          website: "https://developer.spotify.com/documentation/web-api/",
          free: true,
          description:
            "The Spotify Web API allows developers to use their application to get data from the Spotify music catalog. The endpoints results in JSON format providing information such as artists, albums, and tracks directly from the Spotify catalog. Depending on user's authorization, the API can also provide developers access to user-related data i.e. playlists and musics saved in user's library.",
          logo_url:
            "https://res.cloudinary.com/dt8q1ngxj/image/upload/v1632063197/Ace%20Api/spotify_frrzuw.png",
          tags_id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "SoundCloud",
          website: "https://developers.soundcloud.com/",
          free: true,
          description:
            "SoundCloud is the leading audio platform that enables anyone to upload, record, promote and share their sounds across the web. The SoundCloud API makes most of the features from SoundCloud.com available to app developers. With the help of its SDKs it's easy to integrate functionality like audio sharing and recording directly into iOS, Android and web apps.",
          logo_url:
            "https://res.cloudinary.com/dt8q1ngxj/image/upload/v1632064507/Ace%20Api/soundcloud_bal5dt.jpg",
          tags_id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Napster",
          website: "https://developer.napster.com/",
          free: true,
          description:
            "The Napster API provides developers with a secure connection to Napster for on-demand streaming music and content, empowering listeners to enjoy their Napster membership across connected devices and applications.",
          logo_url:
            "https://res.cloudinary.com/dt8q1ngxj/image/upload/v1632064613/Ace%20Api/napster_sknxka.png",
          tags_id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pandora",
          website: "https://developer.pandora.com/",
          free: true,
          description:
            "Create apps powered by GraphQL API, accessing our rich catalog of over 30 million tracks, including songs, comedy albums, podcasts, and more. And all of it powered by the analysis of Pandora’s Music Genome Project.",
          logo_url:
            "https://res.cloudinary.com/dt8q1ngxj/image/upload/v1632065297/Ace%20Api/pandora_treqca.png",
          tags_id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Last.fm",
          website: "https://www.last.fm/api",
          free: true,
          description:
            "The Last.fm API gives users the ability to build programs using Last.fm data, whether on the web, the desktop or mobile devices. The RESTful API allows for read and write access to the full slate of last.fm music data resources - albums, artists, playlists, events, users, and more. It allows users to call methods that respond in either XML or JSON",
          logo_url:
            "https://res.cloudinary.com/dt8q1ngxj/image/upload/v1632065417/Ace%20Api/lastfm_xczkox.png",
          tags_id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "MusicBrainz",
          website: "https://musicbrainz.org/doc/MusicBrainz_API",
          free: true,
          description:
            "The MusicBrainz database contains a huge amount of music metadata, which is maintained by the MusicBrainz community. Find information about artists, albums, tracks and labels. Mash the data with your web app, media player, CD ripper, tagger or other applications requiring music metadata. The service's architecture follows the REST design principles. Interaction with the web service is done using HTTP and all content is served in a simple but flexible XML format.",
          logo_url:
            "https://res.cloudinary.com/dt8q1ngxj/image/upload/v1632065511/Ace%20Api/musicbrainz_wvzkpi.png",
          tags_id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Discogs",
          website: "https://www.discogs.com/developers",
          free: true,
          description:
            "The Discogs API lets developers build their own Discogs-powered applications for the web, desktop, and mobile devices. We hope the API will connect and empower a community of music lovers around the world! The Discogs API v2.0 is a RESTful interface to Discogs data. You can access JSON-formatted information about Database objects such as Artists, Releases, and Labels. Your application can also manage User Collections and Wantlists, create Marketplace Listings, and more.",
          logo_url:
            "https://res.cloudinary.com/dt8q1ngxj/image/upload/v1632065671/Ace%20Api/discogs_fsu853.png",
          tags_id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bandsintown",
          website:
            "https://www.artists.bandsintown.com/support/api-installation",
          free: false,
          description:
            "Bandsintown allows users to view local concerts and gives live music recommendations. The Bandsintown concert API allows any website or mobile application to display the information Bandsintown offers. The Bandsintown API is designed for enterprise partners and artists with websites, media players, and/or mobile applications that would like to list an artist’s events and provide their users with the ability to buy tickets and RSVP to these events. In order to use the Bandsintown API, you must have written consent from Bandsintown Inc.",
          logo_url:
            "https://res.cloudinary.com/dt8q1ngxj/image/upload/v1632065900/Ace%20Api/bandsintown_hb8emn.png",
          tags_id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Songkick",
          website: "https://www.songkick.com/developer",
          free: false,
          description:
            "The Songkick api gives users access to the biggest live music database in the world: over 6 million upcoming and past concerts.The API features data about upcoming and past events, and a user's tracked events. Responses are JSON or XML.",
          logo_url:
            "https://res.cloudinary.com/dt8q1ngxj/image/upload/v1632066203/Ace%20Api/songkick_n2bftx.png",
          tags_id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "MusixMatch",
          website: "https://developer.musixmatch.com/",
          free: true,
          description:
            "The MusixMatch API is 100% legal, because it pays licensing fees. Search for songs by artist, title or lyrics. Receive the lyrics in return. MusixMatch API also lets you surround lyrics text with detailed metadata about the artists who performed it, the genre, influences, related artists and more.",
          logo_url:
            "https://res.cloudinary.com/dt8q1ngxj/image/upload/v1632066531/Ace%20Api/musixmatch_pxc88a.png",
          tags_id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Intellexer",
          url: "http://esapi.intellexer.com/?ref=apilist.fun",
          free: false,
          description:
            "Intellexer API is a cloud service that enables developers to embed natural language processing and text analysis tools in consumer and enterprise applications, or web-services using JSON or XML. Intellexer API includes natural language processing solutions for sentiment analysis, entity recognition, summarization, document comparison, natural language interface for search engines, language detection, spell-checking, etc. Intellexer API methods can be called from any programming language or software component that supports HTTP requests.",
          logo_url:
            "https://res.cloudinary.com/dan-purcell-2021/image/upload/v1631912855/aceapi-assets/Intellexer_giczuh.png",
          tags_id: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "API2Cart",
          url: "https://api2cart.com/",
          free: false,
          description:
            "API2Cart is a unified API to integrate your eCommerce software with 40+ shopping platforms like Magento, Shopify, eBay, etc. We provide SDK and detailed documentation to help you connect multiple shopping carts and marketplaces in one go. Work with all needed data from your clients' stores like products, orders, shipments, customers and baskets. Integrate your SaaS app startup with Magento, Shopify, WooCommerce and other shopping platforms that we support at once.",
          logo_url:
            "https://res.cloudinary.com/dan-purcell-2021/image/upload/v1631912747/aceapi-assets/API2Cart_zzmvet.png",
          tags_id: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "stream",
          url: "https://getstream.io/",
          free: false,
          description:
            "The #1 Chat API for Custom Messaging Apps. Build real-time chat messaging in less time. Rapidly ship in-app messaging with our highly reliable chat infrastructure and feature-rich SDKs. Drive in-app conversion, engagement, and retention. Our enterprise-ready activity feed APIs are used by hundreds of large companies so they can grow without worrying about the scalability, maintenance and reliability of a complicated news feed infrastructure.",
          logo_url:
            "https://res.cloudinary.com/dan-purcell-2021/image/upload/v1631913638/aceapi-assets/stream_aosgw7.png",
          tags_id: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ScrapingBee",
          url: "https://www.scrapingbee.com/",
          free: false,
          description:
            "Tired of getting blocked while scraping the web? ScrapingBee API handles headless browsers and rotates proxies for you. Thanks to our large proxy pool, you can bypass rate limiting website, lower the chance to get blocked and hide your bots! For SEO, keyword monitoring or backlink checking. Scraping search engine result pages is extremely painful because of rate limits. ScrapingBee works great for general web scraping tasks like real estate scraping, price-monitoring, extracting reviews without getting blocked.",
          logo_url:
            "https://res.cloudinary.com/dan-purcell-2021/image/upload/v1631914029/aceapi-assets/ScrapingBee_wu3a0b.png",
          tags_id: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "PDFShift",
          url: "https://pdfshift.io/",
          free: false,
          description:
            "Stop wasting time implementing and maintaining a third-party software/library. With PDFShift, rely on an up-to-date, high-fidelity conversion API with no maintenance costs. We believe that developers should focus their time on things that matter, not setting up yet another PDF library. Because we eliminate needless complexity and provide an up-to-date service, you can get up and running with PDFShift in just a couple of minutes.",
          logo_url:
            "https://res.cloudinary.com/dan-purcell-2021/image/upload/v1631914142/aceapi-assets/PDFShift_elrovc.png",
          tags_id: "5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Apache Cordova REST API",
          url: "https://cordova.apache.org/",
          free: false,
          description:
            "Apache Cordova provides device APIs that allow a mobile app developer to access native device functions from JavaScript. This, combined with a UI framework allows a smartphone app to be developed with just HTML, CSS, and JavaScript. The Cordova APIs assist in apps being built without any native code from the app developer. Instead, web technologies are used, and they are hosted in the app itself locally.",
          logo_url:
            "https://res.cloudinary.com/dan-purcell-2021/image/upload/v1631918234/aceapi-assets/ApacheCordova-resized_annzsx.png",
          tags_id: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "DialogTech",
          url: "https://apidocs.dialogtech.com/",
          free: false,
          description:
            "The DialogTech API retrieves conversational intelligence data driven by artificial intelligence. DialogTech API offers REST architecture with XML responses. The interface is accessible via HTTP and compatible with any programming language that makes web-service calls. DialogTech provides solutions for marketing to convert calls into service appointments and support dialogue.",
          logo_url:
            "https://res.cloudinary.com/dan-purcell-2021/image/upload/v1632341761/aceapi-assets/DialogTechAPI-resized_iihg9v.png",
          tags_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ID Analyzer",
          url: "https://developer.idanalyzer.com/coreapi.html",
          free: false,
          description:
            "ID Analyzer offers identity verification with face & data verification, document authentication, and image cropping functions. The ID Analyzer Core API enables users to upload an image or document and get a JSON response of extracted data, authentication, and biometric verification. The API allows users to submit both front and back of a document in one API call, and data obtained from both sides will be aggregated into a single response.",
          logo_url: "https://www.idanalyzer.com/img/logo-blue.png",
          tags_id: "6",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "SuperTokens",
          url: "https://supertokens.io/docs/ios/sending-requests",
          free: false,
          description:
            "The SuperTokens API enables developers to integrate session management functionalities with their applications to prevent and detect attacks. SuperTokens supports biometrics, SMS or Email OTP, short and long lived tokens, refreshing sessions, Token theft detection, and Secret Key rotation. SuperTokens effectively implements Refresh Token Rotation as per the IETF RFC 6819 standard, and JSON Web Token sign-in Key Rotations.",
          logo_url: "https://supertokens.io/img/logoWithNameLight.svg",
          tags_id: "6",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "TypingDNA",
          url: "https://api.typingdna.com/index.html",
          free: false,
          description:
            "The TypingDNA API matches typing patterns in order to authenticate a user. Typing behavior is captured using JavaScript, and pattern matching results are returned in JSON format, letting the developer know whether or not the typing patterns belong to the same user. This API can be used for secure login, enforcing reset passwords, and online biometric authentication.",
          logo_url: "https://api.typingdna.com/img/typingdna-logo-blue.svg",
          tags_id: "6",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ThumbSignIn",
          url: "https://www.programmableweb.com/sites/default/files/styles/article_profile_150x150/public/icon_gravityforms.png?itok=a7Baeze_",
          free: false,
          description:
            "ThumbSignIn provides two-factor authentication (2FA), and passworless, biometric strong authentication services. The ThumbSignIn Web API enables developers to integrate the service, with methods to register and authenticate users, get transaction status, get device and user ids, and more.",
          logo_url: "https://dh8nazij9b948.cloudfront.net/49b67ef7.png",
          tags_id: "6",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "jQuery",
          url: "http://api.jquery.com/",
          free: false,
          description:
            "jQuery, the JavaScript library that aims to simplify web design, offers an API to use in multiple browsers. Add and manage elements, events, callbacks and more with the API. Developers can work with JSON protocol and access with API Key. Along with the main API, alternative APIs available include jQuery UI, jQuery Mobile, and jQuery Unit.",
          logo_url:
            "https://static.jquery.com/files/rocker/images/logo_jquery_215x53.gif",
          tags_id: "10",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "YouTube",
          url: "https://developers.google.com/youtube/",
          free: false,
          description:
            "The Data API allows users to integrate their program with YouTube and allow it to perform many of the operations available on the website. It provides the capability to search for videos, retrieve standard feeds, and see related content. A program can also authenticate as a user to upload videos, modify user playlists, and more. This integration can be used for a variety of uses such as developing a web application allowing users to upload video to YouTube, or a device or desktop application that brings the YouTube experience to a new platform. The Data API gives users programmatic access to the video and user information stored on YouTube. This can be used to personalize a web site or application with the user's existing information as well as perform actions like commenting on and rating videos. This RESTful API provides responses in XML format.",
          logo_url:
            "https://developers.google.com/site-assets/logo-youtube.svg",
          tags_id: "10",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ziwo",
          url: "https://documenter.getpostman.com/view/1450071/RWToNwzB",
          free: false,
          description:
            "The Ziwo API provides programmatic access to a cloud call center solution. With the API, developers can implement agents, groups, positions, queues, numbers, roles, settings, dynamic routers, and call trackers. The API returns data in JSON format, using a token to authenticate the interface. Ziwo provides a cloud call center & contact center platform.",
          logo_url: "https://www.ziwo.io/wp-content/uploads/2020/08/logo.png",
          tags_id: "10",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Amazon Product Advertising",
          url: "https://webservices.amazon.com/paapi5/documentation",
          free: false,
          description:
            "The Amazon Product Advertising API provides access to Amazon product data such as the items for sale, customer reviews, seller reviews and others. The functions that have been updated for version 5.0 offer features for: the addition of several SDKs in popular languages to integrate signing the request, request serialization and response de-serialization, faster response times and more. This API was previously known as the eCommerce Service and was renamed the Product Advertising API. It provides a way to retrieve product information and expose Amazon's product data and e-commerce functionality to leverage Amazon Product Discovery features. Amazon is an Ecommerce, Business and Web Service Platform that provides cloud computing and electronic commerce, and is one of the largest Internet-based retailers globally.",
          logo_url:
            "https://d15ljbth6loks9.cloudfront.net/assets/logos/paapi5_documentation_logo.png",
          tags_id: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "PayPal",
          url: "https://developer.paypal.com/",
          free: false,
          description:
            "PayPal offers online payment solutions and has more than 153 million customers worldwide. The PayPal API makes powerful functionality available to developers by exposing various features of the PayPal platform. Functionality includes but is not limited to invoice management, transaction processing and account management.",
          logo_url:
            "https://www.parentmail.co.uk/wp-content/uploads/2014/06/PayPal-new-logo.jpg",
          tags_id: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Groupon",
          url: "http://partner-api.groupon.com/help/deal-api",
          free: false,
          description:
            "Groupon features a daily deal on the best stuff to do, see, eat, and buy in a variety of cities across the United States. Groupon gets discounts you won't find anywhere else through the power of group buying. The goal of Groupon API is to allow applications to directly interact with Groupon via a REST API.",
          logo_url: "https://partner-api.groupon.com/help/img/GPN-logo-03.png",
          tags_id: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Apis", null, {});
  },
};
