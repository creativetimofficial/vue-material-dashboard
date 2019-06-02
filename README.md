# Vue Material Dashboard - Testing Branch

## How to run locally the tests
* Get `testing` branch to the latest version
    * `git checkout testing`
    * `git pull`
* Install dependecies
     * `npm install`
* Open project:
    * `npm run serve`
* Run tests (in other terminal)
    * `npm run test:kit-free`
* Open Visual regression dashboard
    * `npm run generateReport`

## Development rules
* After developing a new feature merge master into testing branch so Visual Regression would run with the last version of the kit
