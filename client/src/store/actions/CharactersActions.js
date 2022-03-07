import axios from 'axios';
import { CHARACTER_URL } from '../../constants';

export const GET_CHARACTERS = 'GET_CHARACTERS';

export function getCharacters(){
    return function(dispatch){
        return axios.get(CHARACTER_URL)
        .then((response) => {
            dispatch({
                type: GET_CHARACTERS,
                payload: response.data
            })
        })
    }
}