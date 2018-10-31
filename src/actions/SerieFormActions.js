import firebase from 'firebase';

export const SET_WHOLE_SERIE = 'SET_WHOLE_SERIE';
export const setWholeSerie = serie => ({
    type: SET_WHOLE_SERIE,
    serie
});

export const SET_FIELD = 'SET_FIELD';
export const setField = (field, value) => {
    return {
        type: SET_FIELD,
        field,
        value
    }
}

export const RESET_FORM = 'RESET_FORM';
export const resetForm = () => ({
    type: RESET_FORM
});

export const SERIE_SAVED_SUCCESS = 'SERIE_SAVED_SUCCESS';

// Não preciso exportar porque ela só vai ser usada pelo saveSerie
/**
 * NOTA_ESTUDO:
 * 
 * A seguinte ArrowFunction é uma função com CORPO: () => {}
 * A seguinte ArrowFunction é uma função sem CORPO que retorna um objeto: () => ({})
 */
const serieSavedSuccess = () => ({
    type: SERIE_SAVED_SUCCESS
});

export const saveSerie = (serie) => {

    const { currentUser } = firebase.auth();

    /**
     * NOTA_ESTUDO:
     * 
     * Para o método push() do firebase, eu preferi seguir utilizando a implementação await.
     * Isso é o mesmo que usar o then() da Promisse retornada. Lambrando que só da pra usar await dentro de functions async.
     */
    return async dispatch => {

        const db = firebase.database();
        
        if(serie.id){
            // NOTA_ESTUDO: Não existem tabelas no Firebase, são PATHs
            await db.ref(`/users/${currentUser.uid}/series/${serie.id}`).set(serie);
        }else{
            await db.ref(`/users/${currentUser.uid}/series`).push(serie);
        }
        
        dispatch(serieSavedSuccess());
    }
}