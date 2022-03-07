const { Episode } = require('../models/index');
const ModelCrud = require('./index');
const episodeController = new ModelCrud(Episode);

module.exports = { episodeController }