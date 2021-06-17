// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

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
