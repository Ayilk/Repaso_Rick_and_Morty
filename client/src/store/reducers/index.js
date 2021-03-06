import { GET_CHARACTERS } from "../actions/CharactersActions";

const initialState = {
    characters: []
}

const reducer = (state =  initialState, action ) =>{
    switch(action.type){
        case GET_CHARACTERS:
            return {
                ...state,
                  characters: action.payload
            }
        default: 
        return{
            ...state
        }        
    }
}

export default reducer;
