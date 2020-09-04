# MM Create React App Template

> cra-template-standard

---

## Usage

This template is designed to be used together with our [custom react-scripts](https://github.com/mediamonks/create-react-app).

> npx

```shell
npx create-react-app my-app --scripts-version @mediamonks/react-scripts --template @mediamonks/standard
```

> yarn

```shell
yarn create react-app my-app --scripts-version @mediamonks/react-scripts --template @mediamonks/standard
```

## Differences to CRA

| Addition                           | Reasoning                                                                                                                                                                                                                                              |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Cypress](https://www.cypress.io/) | A modern E2E testing tool, essential for larger projects which have lots of moving parts                                                                                                                                                               |
| polyfill splitting                 | Modern browsers are used by at least 90% of our _general_ user base. In order to decrease loading times for these users, we load the polyfills only for browsers which need them. The polyfill chunk will only be loaded via `<script nomodule .../>`. |
| `TYPE_CHECK` env                   | There exist cases where we don't want webpack to constantly typecheck and alert us to typing errors/warnings. By default this flag is enabled and can be disabled by creating a `.env` file in the root of the project and adding `TYPE_CHECK=false`   |

| Change                                                                       | Reasoning                                                                                                                                                              |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [MediaMonks eslint](https://github.com/mediamonks/frontend-coding-standards) | The existing eslint setup was changed with the MM version, in order to maintain the same standards across different projects and to make it easier to set up new ones. |
| `start` renamed to `dev`                                                     | Again, this change was made in order to maintain cohesion between all of our projects.                                                                                 |

## Contributing

This repository is "forked" from [cra-template](https://github.com/mediamonks/cra-template) and the base template contains the essential barebones of the template also used here. In order to sync changes from the base, make sure to add it as a remote.

```shell
# clone
git clone git@github.com:mediamonks/cra-template-standard.git
# add upstream
git remote add upstream git@github.com:mediamonks/cra-template.git
```

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

**[MIT license](http://opensource.org/licenses/mit-license.php)**
