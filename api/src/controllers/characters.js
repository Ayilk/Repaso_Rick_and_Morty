const axios = require('axios');
const { Character, Episode } = require('../models/index');
const ModelCrud = require('./index');
const { CHARACTER_URL } = require('../constantes');

class CharacterModel extends ModelCrud {
        constructor(model){
            super(model);
        }
        getAll =  ( req, res, next ) => {
            const myCharacter = this.model.findAll({
                   include: {
                       model: Episode,
                       as : 'episode'
                   }
               })
            const apiCharacters = axios.get(CHARACTER_URL);
            Promise.all([myCharacter, apiCharacters])
               .then((results) => {
                   const [ myCharactersResults, apiCharactersResults ] = results;
                   const response = myCharactersResults.concat(
                       apiCharactersResults.data.results)
                   res.send(response);
               })
               .catch((error) => next(error));    
        };
        addEpisodeToCharacter = (req, res, next) => {
            const { characterId, episodeId } = req.params;
            this.model
            .findByPk(characterId)
            .then((character) => {
                return character.addEpisode(episodeId)
            }).then(() => res.send(200))
            .catch((error) => next(error))
        }
    }

const characterController = new CharacterModel( Character );

module.exports = { characterController }
