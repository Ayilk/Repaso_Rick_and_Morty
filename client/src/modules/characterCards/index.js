import { useState, useEffect } from 'react';
import axios from 'axios';
import { CHARACTER_URL } from '../../constants';
import { connect } from 'react-redux';
import { getCharacters } from '../../store/actions/CharactersActions'

 function CharacterCards({characters, getCharacters}){
    //const [ characters, setCharacters ] = useState([]);
    function getCharactersFunction(){
        // return axios
        // .get(CHARACTER_URL)
        // .then(characters => setCharacters(characters.data))
        getCharacters();
    }

    useEffect(() => {
       getCharactersFunction()
    }, [])

    return(
        <div>
            { characters.map((character) => {
                return (
                    <div>
                        <p>
                            { character.name}
                        </p>
                        <img src = { character.image }
                             alt = "https://imgs.search.brave.com/hcpLgeeFZww3HecnxpeIoxfTjt2cXhRR4Hp3dVDMOH8/rs:fit:495:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/N29seVNNazRfNTJp/cmVJd1NqX0tnSGFI/RiZwaWQ9QXBp"
                             />
                    </div>
                )
               
            }) }
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        characters: state.characters
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getCharacters: character =>{
            dispatch(getCharacters(character))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CharacterCards)