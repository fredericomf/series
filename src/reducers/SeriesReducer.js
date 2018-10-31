// import seriesMock from '../mock/series.json'; // Quando é um json precisa especificar a extenção
import { SET_SERIES } from '../actions';

// const INITIAL_STATE = seriesMock;

export default function (state = null, action) {

    switch (action.type) {
        case SET_SERIES:
            return action.series;
        default:
            return state;
    }
}