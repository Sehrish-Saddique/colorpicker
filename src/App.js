import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Signin from './components/Signin';

function App() {
  return (
    <div className="App">
       <Switch>
        <Route exact path="/" component={Navbar}/>
        <Route exact path="/Home" component={Home}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/Contact" component={Contact}/>
        <Route exact path="/Signin" component={Signin}/>
       </Switch>
    </div>
  );
}

export default App;
