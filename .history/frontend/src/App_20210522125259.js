// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Switch } from 'react-router-dom';

function App() {
 return (
  <>
   <Header />
   <main className='container'>
    <Switch></Switch>
   </main>
  </>
 );
}

export default App;
