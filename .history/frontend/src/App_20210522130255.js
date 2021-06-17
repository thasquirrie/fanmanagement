import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
// import logo from './logo.svg';
import './App.css';

function App() {
 return (
  <>
   <Header />
   <main className='container'>
    <Switch>
     <Route path='/' component={HomeScreen} />
    </Switch>
   </main>
  </>
 );
}

export default App;
