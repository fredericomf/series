import React from 'react';
import { StyleSheet, View } from 'react-native';

const FormRow = props => {

    /**
     *  Aqui eu pego todos os componentes passados.
     * Ex: 
     * <FormRow>
     *  <COMPONENTE_CHILD_1>
     *  ...
     *  <COMPONENTE_CHILD_N>
     * </FormRow>
    */
    const {children} = props; 

    return (
        <View style={styles.container}>
            { children }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        elevation: 1,
        backgroundColor: '#FFF',
        marginBottom: 5,
        marginTop: 5,
        padding: 10,
    }
});

export default FormRow;