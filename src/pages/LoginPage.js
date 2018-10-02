import React from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

import FormRow from '../components/FormRow';

export default class LoginPage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        }
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
        console.log(this.state);
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
                <Button 
                    title="Entrar" 
                    onPress={ () => this.tryLogin() }
                    />
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