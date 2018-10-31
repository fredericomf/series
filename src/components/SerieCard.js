import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';

const SerieCard = ({ serie, onNavigate }) => (
    <TouchableOpacity
        onPress={() => onNavigate()}
        style={styles.container}>
        <View style={styles.card}>
            {
                serie.img 
                ? <Image
                source={{
                    uri: serie.img
                }}
                aspectRatio={1}
                resizeMode="cover"
            />
            : null }
            <View style={styles.cardTitleWrapper}>
                <Text style={styles.cardTitle}>{serie.title}</Text>
            </View>
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
    card: {
        flex: 1,
        borderWidth: 1

        // Ligado à solução 2 do container:
        // margin: 10 // substituindo o paddin: 10
    },
    cardTitleWrapper: {
        backgroundColor: 'black',
        height: 50,
        position: 'absolute',
        bottom: 0,
        opacity: 0.8,
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 3,
        paddingRight: 3,
        alignItems: 'center'

    },
    cardTitle: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    }
});

export default SerieCard