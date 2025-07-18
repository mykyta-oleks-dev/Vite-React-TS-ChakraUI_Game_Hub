# Description

This is a project of a videogames discovery website "Game Hub" inspired by RAWG and developed with React and TypeScipt. With the application, users can browse and track games from different platforms, by various genres etc.

## Technologies used

- TypeScript - a strongly typed programming language that builds on JavaScript.

- Node.JS - free, open-source, cross-platform JavaScript runtime environment.

- npm - package manager for the JavaScript programming language maintained by npm, Inc., a subsidiary of GitHub.

- React - a free and open-source front-end JavaScript library for building user interfaces.

- Vite - a build tool and development server for modern JavaScript projects, designed to provide a fast and lean development experience.

- Prettier - an opinionated code formatter that enforces a consistent style by parsing your code and re-printing it with its own rules.

- ESLint - a pluggable linting utility for JavaScript and TypeScript, used to identify and fix problems in the code. Plugins extend ESLint's functionality to support additional rules, frameworks, or coding styles.

- Chakra UI - an open-source component library for React for building web apps and design systems

- Axios - a promise-based HTTP Client for node.js and the browser

- TanStack Query (previously React Query) - a JavaScript library designed to simplify the complex task of data fetching and caching in React applications

## Installation

The project uses `npm` as the package manager.

```shell
$ npm install
```

## Running the project

To run the application in development mode:

```shell
$ npm run dev
```

To build the project files perform Typescript transpilation:

```shell
$ npm run build
```

## Features

- Theme switch: Switch between the dark and light theme with a click on a button in navigational bar

- Games grid: Explore videogames in a grid structure featuring games' ratings and platforms 12 items per page (improvement for future: add size of pages selector)

- Games search:
    - Filters: Adjust filters to search for the games in particular genre or on a specific platform (PlayStation 3, iOS, Nintendo 3DS etc.)
    - Search: Input game's name to search for all the titles consisting of the inserted value
    - Sorting: View the games grid in an order by the chosen sorting method (by relevance and parameters, ascending and descending)

- Runtime data caching: Switch faster between the pages that have already been loaded before during the session

- Responsive design: you can use the application on different screens (genres are hidden for small devices at the current implementation)
