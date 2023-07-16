 import './App.css';
import {Switch,Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
//import Signin from './components/Signin';
import Login from './components/login';

function App() {
  return (
    <div className="App">
       <Switch>
         <Route exact path="/" component={Home}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/Contact" component={Contact}/>
        <Route exact path="/Login" component={Login}/>
       </Switch>
    </div>
  );
}

export default App;
