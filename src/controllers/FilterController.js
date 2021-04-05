const Dev = require('../models/Dev');
const { index } = require('../models/utils/PointSchema');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(req, res) {
        const order = req.params.order;
        const devs = await Dev.find().sort({price: order});

        return res.json(devs)
    }
}