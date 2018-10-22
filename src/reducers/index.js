import {combineReducers} from 'redux';

import userReducer from './userReducer';

/**
 * NOTA_ESTUDO:
 * 
 * Podemos aninhar cobineReducers se precisarmos, fragmentando ainda mais, se necessário. Isso evita de termos um único e gigante reducer
 */
export default combineReducers({
    user: userReducer
});