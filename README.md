
# **Simple** E2E test suite with Cypress
[![cypress-example](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/urshkd&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/urshkd/runs) [![cypress-example](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/count/urshkd&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/urshkd/runs)

> **application under test:** https://github.com/marcusAutomation/securitas_cypress/

## : goal_net: Goals
- keep it simple - no 'custom' abstractions/functions/utils/helpers (use what Cypress provides)
- tests are easily readable
- project is easily understandable even to people without previous JS or Cypress knowledge
- [use shortcuts](https://docs.cypress.io/api/cypress-api/custom-commands#4-Skip-your-UI-as-much-as-possible) to avoid repeating/testing the same UI actions over and over again

![image](https://user-images.githubusercontent.com/48861601/110022516-af6f2400-7d34-11eb-8b13-f21789331cb3.png)

## :gear: Setup

1. `https://github.com/marcusAutomation/securitas_cypress`

2. cd to `cypress-example` folder and run `npm install`

## :heavy_check_mark: Run tests

- If you installed Cypress via npm: 
    - cypress test runner (cypress __open__):
      - **`npm run cy:open:web`** OR `cypress open --env device=web` (change web to mob to switch to mobile view)
    
    - cypress __headless mode__ (cypress run):
      - `npm run cy:run:web` OR `cypress run --env device=web`
- If you installed Cypress zip:
    - import **`cypress-example`** folder and you are good to go


