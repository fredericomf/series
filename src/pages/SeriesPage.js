import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import SerieCard from '../components/SerieCard';
import AddSerieCard from '../components/AddSerieCard';
import {connect} from 'react-redux';

const SeriesPage = props => (
    <View style={styles.container}>
        <FlatList
            data={[...props.series, { isLast: true }]}
            renderItem={({ item }) => (

                item.isLast ?
                    <AddSerieCard
                    onPress={()=>props.navigation.navigate('SerieForm')}/>
                    : <SerieCard
                        serie={item}
                        onNavigate={() => props.navigation.navigate('SerieDetail', { serie: item })} // Ver nas rotas (Router.js)
                    />
            )}
            keyExtractor={item => item.id}
            numColumns={2}
            ListHeaderComponent={props => <View style={styles.marginTop}></View>}
            ListHeaderComponent={props => <View style={styles.marginBottom}></View>}
        ></FlatList>
    </View>
);

const styles = StyleSheet.create({

    container: {
        padding: 6
    },
    marginTop: {
        marginTop: 3
    },
    marginBottom: {
        marginTop: 3
    }

});

const mapStateToProps = state => {
    const {series} = state;
    return {
        series
    };
}

export default connect(mapStateToProps)(SeriesPage);