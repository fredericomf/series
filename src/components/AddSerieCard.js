import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    Dimensions, 
    Image,
    TouchableOpacity
 } from 'react-native';

const AddSerieCard = ({ serie, onPress }) => (
    <TouchableOpacity 
    onPress={() => onPress()}
    style={styles.container}>
        <View style={styles.card}>
            <Image
                style={styles.image}
                source={require('../../resources/add.png')}
                aspectRatio={1}
                resizeMode="cover"
            />
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').width / 2,
        
        // Solução 1
        padding: 3,
        width: '50%'

        // Solução 2
        // flex: .5
    },
    image:{
        width: '100%',
        height: '100%'
    },
    card: {
        flex: 1,
        // Ligado à solução 2 do container:
        // margin: 10 // substituindo o paddin: 10
    }
});

export default AddSerieCard