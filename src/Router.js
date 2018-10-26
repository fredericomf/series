import { createStackNavigator } from 'react-navigation';
import LoginPage from './pages/LoginPage';
import SeriesPage from './pages/SeriesPage';

export default createStackNavigator({ // É como se fossem ROTAS
  'Main': {
    screen: SeriesPage
  },
  'Login':{
    screen: LoginPage,
    navigationOptions: {
      title: "Bem vindo"
    }
  },
},{
  navigationOptions:{
    title: "Series!",
    headerTintColor: '#FFF',
    headerStyle:{
      backgroundColor: '#6CA2F7',
      borderBottomWidth: 1,
      borderBottomColor: '#C5C5C5'
    },
    headerTitleStyle:{
      color: '#FFF',
      fontSize: 30
    }
  }
});