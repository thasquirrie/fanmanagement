import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
// import logo from './logo.svg';
import './App.css';
import LoginScreen from './screens/LoginScreen';

function App() {
 return (
  <BrowserRouter>
   <Header />
   <main className=''>
    <Switch>
     <Route path='/login' component={LoginScreen} />
     <Route path='/' component={HomeScreen} exact />
    </Switch>
   </main>
  </BrowserRouter>
 );
}

export default App;
