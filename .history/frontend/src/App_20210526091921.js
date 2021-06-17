import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
// import logo from './logo.svg';
import './App.css';

function App() {
 return (
  <BrowserRouter>
   <Header />
   <main className=''>
    <Switch>
     <Route path='/' component={HomeScreen} />
    </Switch>
   </main>
  </BrowserRouter>
 );
}

export default App;
