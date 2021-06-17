import { Route, Router, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
// import logo from './logo.svg';
import './App.css';

function App() {
 return (
  <Router>
   <Header />
   <main className='container'>
    <Switch>
     <Route path='/' component={HomeScreen} />
    </Switch>
   </main>
  </Router>
 );
}

export default App;
