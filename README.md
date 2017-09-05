Lando
=====

Lando: smart, stable, fast, flexible local development.

Set up the App Locally
----------------------

* Download code
  * `git clone git@github.com:thinktandem/nuxt-poc.git`
* `cd nuxt-poc`
* `lando start`
* Watch the files
  * `lando grunt`

Write now the `lando grunt` command is running the `nuxt generate` command which
builds out the entire site as a static asset in the `dist` directory.  That in and
of itself is fine, but it takes about 20s for that to happen.

```bash
Completed in 21.933s at Tue Sep 05 2017 14:29:02 GMT+0000 (UTC) - Waiting...
```

Perhaps we can improve the dev experience by using a different command or only
swapping out changed files in our `grunt watch` command?

Adding Pages
------------

Add a new `vue` file in the `pages` directory.  Nuxt automatically configures
the routing for new pages.  So if you add a file called `blah.vue` to the `pages`
directory then after the rebuild the route `/blah` will be available with the
new content.

 
General File Structure
----------------------

* One col site layout
* `assets` dir has images, css, and js files
* `pages` dir has pages; every page in that dir automatically gets a route
* `components` dir has the siteHeader, foot, and links regions
* `layouts`; I have not created any layouts, but if we wanted to deviate from one col I think that is where we would do it

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
