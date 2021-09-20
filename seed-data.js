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
        logo_url: "",
        tags_id: "",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Animetrics FIMS Cloud API",
        url: "http://animetrics.com/fims-cloud/",
        free: false,
        description: "Aimed at the law enforcement, security and military intelligence industries, Animetrics' FaceR Identity Management Solution (FIMS) allows organizations to bring mobile security and video surveillance facial-biometrics applications into the field for use in real time. FIMS Cloud is used to centralize and access a user's cloud based photographic stores using facial recognition. FIMS Cloud organizes, searches and centralizes access to photographic stores using 1:many web service based verification engine.",
        logo_url: "http://animetrics.com/a_img/animetrics_logo_380_80_black_eyes_clean.png",
        tags_id: "6",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Fleetbase API ",
        url: "https://fleetbase.io/docs/api",
        free: false,
        description: "Fleetbase offers API-first logistics services. The API enables developers to build logistics applications with methods to manage places, services areas, zones, vendors, drivers, fleets, service rates, orders and much more.",
        logo_url: "https://fleetbase.io/images/fleetbase-icon.svg",
        tags_id: "2",
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        name: "jQuery API",
        url: "https://api.jquery.com/",
        free: true,
        description: "jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. ",
        logo_url: "https://jquery.com/jquery-wp-content/themes/jquery/images/logo-jquery.png",
        tags_id: "10",
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
        name: "PLugins-10", //rob
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Hacking-11", //jack
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Metadata-12", //max
        createdAt: new Date(),
        updatedAt: new Date()
    },
]
