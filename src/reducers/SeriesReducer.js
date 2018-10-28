import seriesMock from '../mock/series.json'; // Quando é um json precisa especificar a extenção

const INITIAL_STATE = seriesMock;

export default function (state = INITIAL_STATE, action) {
    return state;
}