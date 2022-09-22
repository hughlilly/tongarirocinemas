# IT5005 Project: Tongariro Cinemas

- [IT5005 Project: Tongariro Cinemas](#it5005-project-tongariro-cinemas)
  - [Introduction](#introduction)
  - [Source code](#source-code)
    - [Other files](#other-files)
  - [Running locally](#running-locally)
    - [Requirements/prerequisites](#requirementsprerequisites)
    - [Installation](#installation)
    - [Development server](#development-server)
    - [Build for distribution](#build-for-distribution)
    - [Serve locally](#serve-locally)
  - [Future enhancements](#future-enhancements)
    - [Home page](#home-page)
    - [Now Playing](#now-playing)
    - [About Us](#about-us)
    - [Tickets](#tickets)
    - [Rewards](#rewards)
  - [Upgrading to React](#upgrading-to-react)
  - [Contact](#contact)

## Introduction

This repository contains the website for the IT5005 Project (Web Implementation). The author is Hugh Lilly (ID 20220344).

The site presented alongside this report took three weeks to create, from sketching designs to finalising functionality. It uses [Tailwind CSS](http://tailwindcss.com), a utility-first CSS framework, and provides a number of features that give end-users the ability to:

1. View a list of currently playing films (the **Now Playing** page)
1. Calculate the cost of a selection of tickets (the **Tickets** page)
1. View information on the history of the cinema (**About** page)
1. View information on the rewards programme (**Rewards** pages)

## Source code

The source code for the site is in the `/src` directory. There is an HTML page for each page of the site. There are three subdirectories, `assets`, which holds the images and other media assets, `scripts`, which holds the JavaScript files, and `styles`, which holds the CSS:

```bash
.
├── src
│   ├── assets
│   │   ├── carousel
│   │   ├── logos_icons
│   │   └── stills
│   ├── scripts
│   │   ├── mobile-menu.js
│   │   ├── tickets.js
│   │   └── trailers.js
│   ├── styles
│   │   └── main.css
│   ├── about.html
│   ├── index.html
│   ├── now-playing.html
│   ├── rewards.html
│   └── tickets.html
├── README.md
├── package-lock.json
├── package.json
└── tailwind.config.js
```

### Other files

- `tailwind.config.js` is the Tailwind configuration file.
- `package.json` is the `npm` configuration file.
- `package-lock.json` is generated by `npm` at instal time and should not be modified.

## Running locally

### Requirements/prerequisites

- [Node.js](https://nodejs.org/en/)
- [npm](https://npmjs.org)

The development dependencies are [parcel.js](http://parceljs.org), eslint, prettier, and Tailwind. There are no production dependencies.

### Installation

First, run:

```bash
npm install
```

### Development server

To open the development server, run:

```bash
npm start
```

This runs the parcel bundler, which minifies all HTML and JavaScript, delivering a faster site than simply opening `/src/index.html` in a browser (though this will also work).

### Build for distribution

To build the site, run:

```bash
npm run build
```

This creates a minifed build of the site along with all assets, which makes for a faster load time.

### Serve locally

To serve the built site locally, run:

```bash
npm run open
```

NB: The site was built before distribution, so this command should be able to be run without running a new build beforehand.

## Future enhancements

The existing site could be enhanced in a number of ways:

### Home page

Infomation could be added to the carousel, such as details on upcoming sessions. This space could also be used to promote other aspects of the cinema and business, such as the museum.

### Now Playing

This page would be greatly enhanced by the addition of information on specific sessions, as well as perhaps some advertising for other aspects of the business.

### About Us

More information could be added here on the history of the cinema, and in particular on the museum and café.

### Tickets

This page has great end-user functionality, but would be significantly improved if it were connected to a live ticketing system.

### Rewards

This page could be enhanced with the addition of a newsletter signup form.

## Upgrading to React

The site could be upgraded to the component-based JavaScript framwork [React](http://reactjs.org). This would greatly enhance both user-facing and administrative functionalities.

Moving development to React could provide:

1. The ability to load the whole site as one application, navigating between "routes" instead of individual HTML pages
1. The ability to create single components that return multiple iterations of a particular HTML element, for example by mapping over data on films, or other repeated page elements such as the Home page blurbs that lead to other parts of the site.
1. The administrative panel for content could be contained in several JSON objects, and stored securely in individual `.js` files alongside the application itself.
1. The need for multiple HTML pages each with a copy of the header and footer would be removed, greatly improving maintainability.

## Contact

Contact the author, Hugh Lilly (ID 20220344), by email (20220344@mywhitecliffe.com) if you have any questions.

---

(Last updated September 20, 2022.)
