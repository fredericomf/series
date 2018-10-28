import { SET_FIELD, SERIE_SAVED_SUCCESS } from '../actions';

const INITIAL_STATE = {
    title: '',
    gender: 'police',
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
        case SERIE_SAVED_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }

}