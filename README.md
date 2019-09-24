[![Build Status](https://travis-ci.org/getweekday/elements.svg?branch=master)](https://travis-ci.org/getweekday/elements)
[![Netlify Status](https://api.netlify.com/api/v1/badges/6d8f92d2-41a4-4e14-9a5e-22e9a1230853/deploy-status)](https://app.netlify.com/sites/weekday-elements/deploys)

# Elements
> Elements is the React based UI library for the Weekday platform. This is library should be considered as pre alpha right now - active development is continuing. See below roadmap for progress.

## Installation
You can install the library directly from master until we get to a post v1.0.0 state.
```
npm i --save @weekday/elements
yarn add @weekday/elements
```

## Global packages
- Node v9.x
- Webpack 4.x
- Npm v4.2.0

## Building & installation
All of the building happens with npm

### Testing & linting
```
npm run test
npm run lint
```
### Dev server
```
npm run storybook
npm run dev
```

### Building
```
npm run build
npm run build:prod
npm run build:storybook
```

## Roadmap (not in any particular order)
- [x] Project setup
- [x] Repo & GitHub pages setup
- [x] Preliminary components & tests (avatar & button)
- [x] Continuous deployment runner for tests & Storybook generating
- [ ] NPM package (add badge)
- [ ] Code coverage (add badge)
- [ ] Card component
- [ ] Tooltip component
- [ ] Tabbed (hor/ver) component
- [ ] Spinner component
- [ ] Modal component
- [ ] Input component
- [ ] Menu component
- [ ] Text component
- [ ] Media component
- [ ] More robust component tests
- [ ] More component stories
- [ ] Mobile responsive styles
- [ ] Website
- [ ] Better docs
