import { SET_FIELD, SERIE_SAVED_SUCCESS, SET_WHOLE_SERIE, RESET_FORM } from '../actions';

const INITIAL_STATE = {
    id: null,
    title: '',
    gender: 'Policial',
    rate: 1,
    img: '',
    description: ''
}

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {
        case SET_FIELD:

            /**
             * NOTA_ESTUDO:
             * O State é imutável, o exemplo a seguir é o que NÃO PODE SER FEITO!
             * 
             * state[action.field] = action.value
             * return state;
             * 
             * O Correto é criar um novo state clonando o state atual. Exemplos:
             * 
             * const newState = Object.assign({}, state);
             * newState[action.field] = action.value
             * 
             * OU
             * 
             * const newState = {...state}; // Usando spread operator (Similar ao Object.assign)
             * newState[action.field] = action.value;
             */

            const newState = { ...state };
            newState[action.field] = action.value;
            return newState;
        case SET_WHOLE_SERIE:
            return action.serie;
        case RESET_FORM:
        case SERIE_SAVED_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }

}