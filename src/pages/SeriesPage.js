import React from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native';
import SerieCard from '../components/SerieCard';
import AddSerieCard from '../components/AddSerieCard';
import { connect } from 'react-redux';
import { watchSeries } from '../actions';

/**
 * NOTAS_ESTUDO:
 * 
 * É criado um CLASS COMPONENT quando preciso de: * 
 * Life Cycle (que usam métodos como componentDidMount() etc...), State Local
 */

class SeriesPage extends React.Component {

    componentDidMount() {
        this.props.watchSeries();
    }

    render () {

        const {series, navigation} = this.props;

        if(series===null){
            return <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}><ActivityIndicator /></View>;
        }
        
        return (
            
            <View style={styles.container}>
                <FlatList
                    data={[...series, { isLast: true }]}
                    renderItem={({ item }) => (

                        item.isLast ?
                            <AddSerieCard
                                onPress={() => navigation.navigate('SerieForm')} />
                            : <SerieCard
                                serie={item}
                                onNavigate={() => navigation.navigate('SerieDetail', { serie: item })} // Ver nas rotas (Router.js)
                            />
                    )}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    ListHeaderComponent={() => <View style={styles.marginTop}></View>}
                    ListHeaderComponent={() => <View style={styles.marginBottom}></View>}
                ></FlatList>
            </View>
        );
    }
}

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
    const { series } = state;

    if(series === null){
        return {series};
    }


    const keys = Object.keys(series);
    const seriesWithKeys = keys.map(key => {

        // NOTA_ESTUDO: Isso se chama: Computed Fields
        return { ...series[key], id: key };
    });

console.log(seriesWithKeys);

    return {
        series: seriesWithKeys
    };
}

export default connect(mapStateToProps, { watchSeries })(SeriesPage);