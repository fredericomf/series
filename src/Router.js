import { createStackNavigator } from 'react-navigation';
import LoginPage from './pages/LoginPage';
import SeriesPage from './pages/SeriesPage';
import SerieDetailPage from './pages/SerieDetailPage';
import SerieFormPage from './pages/SerieFormPage';

export default createStackNavigator({ // É como se fossem ROTAS
  'Login': {
    screen: LoginPage,
    navigationOptions: {
      title: "Bem vindo"
    }
  },
  'Main': {
    screen: SeriesPage
  },
  'SerieDetail': {
    screen: SerieDetailPage,
    navigationOptions: ({ navigation }) => {
      const { serie } = navigation.state.params;
      return {
        title: serie.title,
        serie: serie
      }
    }
  },
  'SerieForm':{
    screen: SerieFormPage,
    navigationOptions: {
      title: 'Nova série'
    }
  }
}, {
    navigationOptions: {
      title: "Series!",
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#6CA2F7',
        borderBottomWidth: 1,
        borderBottomColor: '#C5C5C5'
      },
      headerTitleStyle: {
        color: '#FFF',
        fontSize: 30
      }
    }
  });