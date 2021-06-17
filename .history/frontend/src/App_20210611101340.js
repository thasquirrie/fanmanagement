import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
// import logo from './logo.svg';
import './App.css';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import Footer from './components/Footer';
import DashboardScreen from './screens/DashboardScreen';
import PricingScreen from './screens/PricingScreen';

function App() {
 return (
  <Router>
   <div className='bg-white'>
    <div className='relative overflow-hidden'>
     <Header />
     <main>
      <Switch>
       <Route path='/login' component={LoginScreen} />
       <Route path='/signup' component={SignupScreen} />
       <Route path='/dashboard' component={DashboardScreen} />
       <Route path='/pricing' component={PricingScreen} />
       <Route path='/' component={HomeScreen} exact />
      </Switch>
     </main>
    </div>
   </div>
   <Footer />
  </Router>
 );
}

export default App;
