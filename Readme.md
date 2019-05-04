# Making Sense Superheroes Test App

## Installation

```bash
git clone git@github.com:paulmdorr/MakingSenseSuperheroesTest.git
cd MakingSenseSuperheroesTest
yarn install
```

## Running dev

```bash
yarn dev
```

will run the app on Parcel's default port: http://localhost:1234

## Generate production build

```bash
yarn build
```

## Features

- Stores app state with redux
- Basic bundling with Parcel
- CSS-in-JS using astroturf
- Helmet to improve SEO (as an example, because this would work if I were using server-side rendering)
- React Router for routes and dynamic urls for each superhero (deep-linking)
- Redux thunk to improve the loading/success/error experience
- API config in a separate file (see [Improvements](#improvements))

## Improvements

List of improvements that could be done if I had more time

- Add a backend for frontend in order to support:
  - Server-side rendering
  - The ability to configure the API keys from *env variables* and to generate the *API hash dynamically* (see comments in [APIConfig.js](src/config/APIConfig.js))
- Add unit testing (you can take a look to how I write tests in [this repo](https://github.com/paulmdorr/BrandsAPI/tree/master/src/Repositories/tests))
- Improve CSS style and responsiveness
- Fix small issues in the code (e.g. the superheroes list loads twice if you reload the page with a superhero selected)