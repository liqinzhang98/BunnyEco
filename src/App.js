import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './customer/Home';
import Login from './customer/Login';
import Register from './customer/Register';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/login'><Login /></Route>
        <Route path='/register'><Register /></Route>
      </Switch>
    </div>
  );
}

export default App;
