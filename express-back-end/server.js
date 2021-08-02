const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const port = process.env.PORT || 8001;
const morgan = require('morgan')

app.use(morgan('dev'));
// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Let's go, Lawyer Up!",
}));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});