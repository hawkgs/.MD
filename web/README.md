**IMPORTANT: Keep in mind that this app was developed during the very early days of Angular 2+, during its beta period (beta.v0) when a complete and thorough documentation was not available. Since then a lot of has changed. Conceptions like NgModule were introduced, some of the core parts/packages were completely rewritten. The app does not follow the current style guides, probably uses techniques that are now considered bad practices, performs direct DOM manipulations, etc.**

### Used Technologies

* * *

**Front-end**

*   `Angular 2` - Main framework for the front-end part of the application
*   `jqlite` - DOM manipulation library (used in very rare cases)
*   `to-markdown` - HTML to MD converter (working with DOM objects)

**Back-end (NodeJS)**

*   `express` - Main framework for the REST API of the server
*   `express-handlebars` - Express view engine used for rendering of the main Ng2 page
*   `body-parser` - Request body parsing middleware
*   `passport` - Used for describing authentication strategies (currently only _local_)
*   `jsonwebtoken & express-jwt` - Authentication modules
*   `mongoose` - A Node MongoDB driver.

**Other**

*   `gulp` - A task runner (and all its respective plugins)
