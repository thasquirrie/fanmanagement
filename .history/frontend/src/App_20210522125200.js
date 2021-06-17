// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRoute, Router, Route } from 'react-router-dom';

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
