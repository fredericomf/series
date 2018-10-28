import {combineReducers} from 'redux';

import userReducer from './userReducer';
import serieFormReducer from './SerieFormReducer';
import seriesReducer from './SeriesReducer';
/**
 * NOTA_ESTUDO:
 * 
 * Podemos aninhar cobineReducers se precisarmos, fragmentando ainda mais, se necessário. Isso evita de termos um único e gigante reducer
 */
export default combineReducers({
    user: userReducer,
    serieForm: serieFormReducer,
    series: seriesReducer
});