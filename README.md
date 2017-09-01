Lando
=====

Lando: smart, stable, fast, flexible local development.

Build Setup
-----------

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```
General File Structure
----------------------

* One col site layout
* `assets` dir has images, css, and js files
* `pages` dir has pages; every page in that dir automatically gets a route
* `components` dir has the siteHeader, foot, and links regions
* `layouts`; I have not created any layouts, but if we wanted to deviate from one col I think that is where we would do it

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
