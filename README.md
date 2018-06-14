This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This project is an npm project trying to use a minimum of dependencies.  Create-react-app was used to bootstrap the basic React tooling in place of separately and manually installing and configuring webpack, babel, jest, and enzyme.

To install the dependencies to allow for local viewing, use your terminal to cd to the root folder of this project, where the package.json is contained, and run `npm i`.

After the project's dependencies are installed, the website can be started for local viewing by running `npm start`.  The default system browser should start, and view the website at [http://localhost:3000/](http://localhost:3000/) .  If not, open your browser of choice and navigate to [http://localhost:3000/](http://localhost:3000/).

While the program is running in the browser, it will use the sample data in src/Scenarios/deliveries-sample.json to render.  Upon starting, the program defaults to showing Monday's restaurants.  For testing purposes, the day can be changed by clicking on a different day - for this app to go live, slightly different logic would be required, likely using a native JavaScript date object to get the date, yet allowing the user to see restaurants from different dates.

The application an example of unit tests in src/Components/\__tests\__/Header.test.js .  These tests can be run by running `npm run test` in the terminal.