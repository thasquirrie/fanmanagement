// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';

function App() {
 return (
  <>
   <Header />
   <main className='container'>
    <Switch>
     <Route />
    </Switch>
   </main>
  </>
 );
}

export default App;
