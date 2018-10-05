import React from 'react';
import {
    ActivityIndicator,
    Alert,
    Button,
    Text,
    TextInput,
    StyleSheet,
    View
} from 'react-native';
import firebase from 'firebase';

import FormRow from '../components/FormRow';

export default class LoginPage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
            isLoading: false,
            message: ''
        }
    }

    componentDidMount() {

        // Initialize Firebase
        const config = {
            apiKey: "AIzaSyBSE2m345kJIRrwyd4rRVQPeRJpqT6LCe4",
            authDomain: "series-cee87.firebaseapp.com",
            databaseURL: "https://series-cee87.firebaseio.com",
            projectId: "series-cee87",
            storageBucket: "series-cee87.appspot.com",
            messagingSenderId: "313355878337"
        };
        firebase.initializeApp(config);

        // EXEMPLO DE USO:
        // Ao chamar o signInWithEmailAndPassword é retornada uma PROMISSE
        // firebase
        //     .auth()
        //     .signInWithEmailAndPassword('teste@mail.com', '123123')
        //     .then( user => {
        //         console.log('usuário autenticado', user);
        //     })
        //     .catch(error => {
        //         console.log('usuário autenticado', error);
        //     });
    }

    /*
    -> Os métodos abaixo foram substituidos por um mais genérico: onChangeHandler
    onChangeEmail( email ) {
        // Forma normal de setar seria receber como text, mas...
        // this.setState({ email: text });

        // com o destructuring podemos fazer isso:
        this.setState( { email } ); // Isso é igual a: this.setState({email:email});
    }

    onChangePassword( password ) {
        this.setState( { password } );
    }
    */

    onChangeHandler( field, value ) {
        
        // Forma ES5 de implementar
        // const newState = {};
        // newState[field] = value; // Busca ou define uma variável no objeto
        // this.setState( newState );

        // Implementando com ES6:
        this.setState({
            [field]: value
        });
    }

    tryLogin(){

        this.setState({isLoading : true, message: ''});
        
        const { email, password } = this.state;

        firebase
            .auth()
            .signInWithEmailAndPassword( email, password )
            .then( user => {
                this.setState({ message: 'Sucesso!' });
                console.log('usuário autenticado', user);
            })
            .catch(error => {
                this.setState({ 
                    message: this.getErrorMessageByCode( error.code )
                });
                // console.log('falha ao autenticar', error);
            })
            .then( () => this.setState({ isLoading: false }) ); // Mesmo que dê o catch ele vai cair aqui depois
    }

    getErrorMessageByCode( code ) {

        switch(code){
            case 'auth/wrong-password':
                return 'Senha incorreta';
            case 'auth/user-not-found':
                return 'Usuário não encontrado';
            default:
                return 'Erro desconhecido';
        }
    }

    renderButton() {

        if(this.state.isLoading)
            return <ActivityIndicator />;

        return (
            <Button 
            title="Entrar" 
            onPress={ () => this.tryLogin() }
            />
        );
    }

    renderMessage() {

        const { message } = this.state;

        if( !message ) 
            return null;
        
        return (
            <View>
                <Text>{message}</Text>
            </View>
        );
    }

    render() {
        return(
            <View>
                <FormRow 
                // Se eu definir uma propriedade sem passar nada ela vai como true
                first
                >
                    <TextInput 
                        placeholder="user@mail.com" 
                        style={ styles.input } 
                        value={ this.state.email } 

                        // É assim que são tratados os valores em campos input React
                        onChangeText={ value => this.onChangeHandler( 'email', value ) }
                        />
                </FormRow>
                <FormRow last>
                    <TextInput 
                    placeholder="******" 
                    secureTextEntry={true} 
                    style={ styles.input } 
                    value={ this.state.password } 
                    onChangeText={ value => this.onChangeHandler( 'password', value ) }
                    />
                </FormRow>
                { this.renderButton() }
                { this.renderMessage() }
            </View>
        );
    }
}

const styles = StyleSheet.create({

    input: {
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5,
    }

});