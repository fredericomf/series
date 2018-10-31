import React from 'react';
import { StyleSheet, ScrollView, Image, Button, View } from 'react-native';
import Line from '../components/Line';
import LongText from '../components/LongText';
import {connect} from 'react-redux';
import {deleteSerie} from '../actions';

class SerieDetailPage extends React.Component {
    render() {

        const { navigation } = this.props;
        const { serie } = navigation.state.params;

        return (
            <ScrollView>

                {
                    serie.img ? <Image
                        style={styles.image}
                        source={{
                            uri: serie.img
                        }}
                    />
                        : null
                }
                <Line label='Título' content={serie.title} />
                <Line label='Genero' content={serie.gender} />
                <Line label='Nota' content={serie.rate} />
                <LongText label='Descrição' content={serie.description} />

                <View style={styles.buttonWrapper}>
                    <Button title="Editar"
                        onPress={() => {
                            navigation.replace('SerieForm', { serieToEdit: serie }); // NOTA_ESTUDO: O 'routeName' é case-sensitive (Talvez seja interessante exportar consts das rotas)
                        }} />
                </View>

                <View style={styles.buttonWrapper}>
                    <Button 
                    color="#FF0004FF"
                    title="Deletar"
                        onPress={async () => {
                            const hasDelete = await this.props.deleteSerie(serie);
                            if(hasDelete){
                                navigation.goBack();
                            }
                        }} />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1
    },
    buttonWrapper: {
        margin: 10
    }
});

export default connect(null, { deleteSerie })(SerieDetailPage);