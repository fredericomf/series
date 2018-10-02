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
    const {children, first, last} = props; 

    return (
        <View 
        /**
         * Estilos com array: Ele adiciona os estilos na ordem descrita (aceita operações)
         */
        style={[styles.container, 
            first ? styles.first : null,
            last ? styles.last : null
        ]}>
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
    },
    first: {
        marginTop: 10
    },
    last: {
        marginBottom: 10
    }
});

export default FormRow;