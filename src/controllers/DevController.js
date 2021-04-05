const axios = require('axios');
const parseStringAsArray = require('../utils/parseStringAsArray');
const {findConnections, sendMessage} = require('../websocket');

const Dev = require("../models/Dev");

//index, show, store, update, destroy

module.exports = {
    async index(req, res) {
        const devs = await Dev.find();
        return res.json(devs);
    },

    async store(req, res) {
        const {github_username, techs, latitude, longitude, price} = req.body;
        
        let dev = await Dev.findOne({github_username});

        if(!dev) {
            const apiResponse = await axios(`https://api.github.com/users/${github_username}`);
    
            const {name = login, avatar_url, bio} =  apiResponse.data;
        
            const techsArray = parseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
                price
            })

            // Filtrar as conexõesque estão no máximo 10km de distancia
            // e que  novo dev tenha pelo menos uma das tecnologias filtradas
            const sendSocketMessageTo = findConnections(
                {latitude, longitude},
                techsArray
            );

            sendMessage(sendSocketMessageTo, 'new-dev', dev);
        }
    
        return res.json(dev);
    }
}