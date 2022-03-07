const { Sequelize } = require('sequelize');
const {dbHost, dbName, dbUser, dbPassword} = require('../utils/config');

const CharacterFactory = require('./Characters');
const EpisodeFactory = require('./Episodes');

const sequelize = new Sequelize(`postgres://${dbUser}:${dbPassword}@${dbHost}/${dbName}`);

const Character = CharacterFactory(sequelize);
const Episode = EpisodeFactory(sequelize);

Character.belongsToMany(Episode, {through: 'CharacterEpisode', as : 'episode'});
Episode.belongsToMany(Character, {through: 'CharacterEpisode', as : 'episode'});

module.exports = {
    conn : sequelize,
    Character,
    Episode
}