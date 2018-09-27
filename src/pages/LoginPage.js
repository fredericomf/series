import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

import FormRow from '../components/FormRow';

export default class LoginPage extends React.Component{
    render(){
        return(
            <View>
                <FormRow>
                    <TextInput placeholder="user@mail.com" style={ styles.input } />
                </FormRow>
                <FormRow>
                    <TextInput placeholder="******" secureTextEntry={true} style={ styles.input } />
                </FormRow>
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