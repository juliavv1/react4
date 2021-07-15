import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
function App() {
  return (

<Router>
  <div>
        <div> <Link to={/users}>Users Page</Link></div>
        <div> <Link to={/comments}>Comments Page</Link></div>

        </div>
</Router>
      );
    }