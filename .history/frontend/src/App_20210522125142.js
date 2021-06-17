// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRoute, Router, Route } from 'react-router-dom';

function App() {
 return (
  <>
   <Header />
   <div className='container'>
    <Switch></Switch>
   </div>
  </>
 );
}

export default App;
