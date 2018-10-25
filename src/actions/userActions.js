import firebase from 'firebase';
import {Alert} from 'react-native';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const userLoginSuccess = user => ({
    type: USER_LOGIN_SUCCESS,
    user
});

export const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () => ({
    type: USER_LOGOUT
});


/**
 * NOTA_ESTUDO:
 * Explicando a técnica Currying:
 * Uma função que retorna uma função.
 * 
 * EXEMPLO: 
 * function fakeTryLogin({email, password}){
 *      return function(dispatch){    
 *           // ...
 *      }
 *  }
 * 
 * Usando arrowFuncions ficaria: const fakeTryLogin = ({email, password}) => dispatch => {//...}
 * 
 * É necessário implementar isso para utilizar o 'redux-thunk', uma biblioteca que opera como Middleware para chamadas assíncronas.
 */
export const tryLogin = ({ email, password }) => dispatch => {

    // Esse return retornará a Promisse para ser tratada externamente
    return firebase
        .auth()
        .signInWithEmailAndPassword(email.toLowerCase().trim(), password)
        .then(user => {
            const action = userLoginSuccess(user);
            dispatch(action); // Tem que fazer o dispatch (redux-thunk)
            return user;
        })
        .catch(error => {
            if (error.code === 'auth/user-not-found') {

                /**
                 * NOTA_ESTUDO:
                 * Essa promise deve ser recebida com .then (resolve) e .catch (reject)
                 */
                return new Promise((resolve, reject) => {
                    
                    /**
                     * NOTA_ESTUDO:
                     * 
                     * Cuidado ao importar o Alert, o sistema não dá erro se for importado errado. :(
                     */
                    Alert.alert(
                        'Usuário não encontrado',
                        'Deseja criar um cadastro com as informações inseridas?',
                        [{ // A ordem importa, consultar documentação
                            text: 'Não',
                            onPress: () => resolve(),
                            style: 'cancel' // Só para IOS (seguindo padrão UI)
                        },
                        {
                            text: 'Sim',
                            onPress: () => {
                                firebase
                                    .auth()
                                    .createUserWithEmailAndPassword(email.toLowerCase().trim(), password)
                                    .then(user => resolve(user)) // NOTA_ESTUDO: Poderia ser .then(resolve) (aqui ocorre a abstração do user)
                                    .catch(reject)
                            }
                        }],
                        { cancelable: false } // Evita que o usuário possa clicar fora do modal e sair
                    );
                });

            } else {

                return Promise.reject(error);
                // /**
                //  * Quando não é o único retorno ou instrução o Destructuring não funciona.
                //  * Aí é necessário chamar a função no modo clássico
                //  */
                // loginUserFailed(error)
                // console.log('falha ao autenticar', error);
            }
        })
}