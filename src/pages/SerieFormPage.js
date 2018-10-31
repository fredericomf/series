import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    TextInput,
    Picker,
    Slider,
    ActivityIndicator,
    Button,
    KeyboardAvoidingView,
    Alert
} from 'react-native';
import { AirbnbRating, Rating } from 'react-native-ratings';
import FormRow from '../components/FormRow';
import { setField, saveSerie, setWholeSerie, resetForm } from '../actions'
import { connect } from 'react-redux';

import mock from '../mock/series.json';

/**
 * 
 * NOTA_ESTUDO:
 * 
 * Recebo o parâmetro "serieForm" do método mapStateToProps (redux)
 */
class SerieFormPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        }


        // Usada para carregar o MOCK pras núvens
        // mock.forEach(async element => {
        //     await this.props.saveSerie(element);
        //     console.log('SALVEI UMA SERIE');
        // });
    }

    // Component Life Cycle
    componentDidMount() {
        // NOTA_ESTUDO:  Eu tenho acesso à essa action porque eu importei ela e implementei no 'mapDispatchToProps'

        const { navigation, setWholeSerie, resetForm } = this.props;
        const { params } = navigation.state;

        if (params && params.serieToEdit) {
            setWholeSerie(params.serieToEdit);
        }else{
            resetForm();
        }
    }

    render() {
        const {
            serieForm,
            setField,
            saveSerie,
            navigation
        } = this.props;

        return (

            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={120} enabled>
                <ScrollView style={{ paddingLeft: 5, paddingRight: 5 }}>
                    <FormRow first>
                        <TextInput
                            style={styles.input}
                            placeholder="Título"
                            value={serieForm.title}
                            onChangeText={value => setField('title', value)} // NOTA_ESTUDO: Não acesso o props com "this" porque isso é um Functional Component
                        />
                    </FormRow>

                    <FormRow>
                        <TextInput
                            style={styles.input}
                            placeholder="URL da imagem"
                            value={serieForm.img}
                            onChangeText={value => setField('img', value)}
                        />
                    </FormRow>

                    <FormRow>
                        <Picker
                            selectedValue={serieForm.gender}
                            style={styles.picker}
                            onValueChange={(value, index) => setField('gender', value)}>
                            <Picker.Item label="Policial" value="Policial" />
                            <Picker.Item label="Comédia" value="Comédia" />
                            <Picker.Item label="Terror" value="Terror" />
                            <Picker.Item label="Drama" value="Drama" />
                            <Picker.Item label="Ficção Científica" value="Ficção Científica" />
                        </Picker>
                    </FormRow>

                    {/* <FormRow>
                <View style={styles.sameRow}>
                    <Text>Nota:</Text>
                    <Text>{serieForm.rate}</Text>
                </View>
                <Slider
                    minimumValue={0}
                    maximumValue={100}
                    step={5}
                    value={serieForm.rate}
                    onValueChange={value => setField('rate', value)}
                />
            </FormRow> */}

                    <FormRow>
                        <Rating
                            style={{ flexDirection: 'column', alignItems: 'center' }}
                            showRating
                            imageSize={30}
                            defaultRating={serieForm.rate}
                            onFinishRating={rating => setField('rate', rating)}
                        />
                    </FormRow>

                    <FormRow>
                        <TextInput
                            style={styles.input}
                            placeholder="Descrição"
                            value={serieForm.description}
                            onChangeText={value => setField('description', value)}
                            numberOfLines={7}
                            multiline={true}
                        />
                    </FormRow>

                    {
                        this.state.isLoading
                            ? <ActivityIndicator />
                            : <Button
                                title="Salvar"
                                onPress={async () => {

                                    this.setState({ isLoading: true });
                                    try {
                                        await saveSerie(serieForm);
                                        navigation.goBack();
                                    } catch (error) {
                                        Alert.alert('Erro', error.message);
                                    } finally {
                                        this.setState({ isLoading: false });
                                    }
                                }}
                            />
                    }
                </ScrollView>
            </KeyboardAvoidingView>
        );

    }
}

const styles = StyleSheet.create({
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5
    },
    picker: {
        height: 50,
        width: '100%'

    },
    sameRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10

    }
});

/**
 * NOTA_ESTUDO:
 * 
 * O mapStateToProps é como seu eu quisesse que o meu componente recebece assim:
 * 
 * Dada a função:
 * function mapStateToProps(state){
 *  return {
 *      return 456;
 *  }
 * }
 * 
 * <SeriePageForm minhaProp={456} />
 */
function mapStateToProps(state) {
    return {
        serieForm: state.serieForm
    }
}

/**
 * NOTA_ESTUDO:
 * 
 * O setField vem do Action Creator que implementamos.
 * Ele não é responsável por fazer o dispatch(), que faz isso é o redux (implicitamente). Resta ao Action Creator retornar o objeto.
 * 
 * Continuando com o exemplo do mapStateToProps, o mapDispatchToProps seria o mesmo que:
 * 
 * <SerieFormPage
 *  minhaProp={456}
 *  setField={(field, value) => dispatch(setField(field, value))} /> // Isso é feito automaticamente pelo REDUX
 */
const mapDispatchToProps = {
    setField,
    saveSerie,
    setWholeSerie,
    resetForm
}

export default connect(mapStateToProps, mapDispatchToProps)(SerieFormPage);