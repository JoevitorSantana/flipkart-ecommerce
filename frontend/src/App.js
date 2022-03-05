import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './container/Home';
import { SignIn } from './container/SignIn';
import { SignUp } from './container/SignUp';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} /> 
        <Route path="/signin" component={SignIn}/>     
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
