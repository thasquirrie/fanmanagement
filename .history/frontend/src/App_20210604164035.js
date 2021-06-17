import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
// import logo from './logo.svg';
import './App.css';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
// import DashboardScreen from './screens/DashboardScreen';

function App() {
 return (
  <Router>
   <Header />
   <div className=''>
    <Switch>
     <Route path='/login' component={LoginScreen} />
     <Route path='/signup' component={SignupScreen} />
     {/* <Route path='/dashboard' component={DashboardScreen} /> */}
     <Route path='/' component={HomeScreen} exact />
    </Switch>
   </div>
  </Router>
 );
}

export default App;
