[![Build Status](https://travis-ci.org/yacklabs/elements.svg?branch=master)](https://travis-ci.org/yacklabs/elements)
[![Netlify Status](https://api.netlify.com/api/v1/badges/80d2fa2c-9ecf-44a8-9856-356975515b11/deploy-status)](https://app.netlify.com/sites/wizardly-jones-2c1356/deploys)
[![npm version](https://badge.fury.io/js/%40yacklabs%2Felements.svg)](https://badge.fury.io/js/%40yacklabs%2Felements)

# Elements
> Elements is the React based UI library for the Yack platform. This is library should be considered as pre alpha right now - active development is continuing. See below roadmap for progress.

## Installation
Add `registry=https://npm.pkg.github.com/yack` to your `.npmrc` file

```
npm i --save @yack/elements
yarn add @yack/elements
```

## Global packages
- Node v9.x
- Webpack 4.x
- Npm v4.2.0

## Building & installation
All of the building happens with npm or Yarn

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
- [x] NPM package
- [x] Attachment component
- [x] Avatar component
- [x] Button component
- [x] Error component
- [x] Input component
- [x] Loading component
- [x] Members component
- [x] Menu component
- [x] Modal component
- [x] Notification component
- [x] Popup component
- [x] Channel component
- [x] Spinner component
- [x] Tabbed component
- [x] Textarea component
- [x] Tooltip component
- [x] Toggle component
- [x] User component
- [x] Select component
- [x] Progress component
- [ ] Code coverage (add badge)
- [ ] More robust component tests
- [ ] More component stories
- [ ] Mobile responsive styles
- [ ] Website
- [ ] Better docs/comments
