const {Router} = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
const FilterController = require('./controllers/FilterController');

routes = Router();

routes.get('/', (req, res) => {
    return res.json({running: 'ok'});
})

routes.get('/devs', DevController.index);
routes.post("/devs", DevController.store);

routes.get('/search', SearchController.index);

routes.get('/filter/:order', FilterController.index);

module.exports = routes;