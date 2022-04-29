import logo from './logo.svg';
import './App.css';
import Home from './home';
import Gallery from './gallery';
import Uploadform from './uploadform';
import {BrowserRouter,Switch,Link,Route} from 'react-router-dom'
import Login from './login';
import Signup from './signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path="/upload" exact>
        <Uploadform/>
      </Route>
      <Route path="/login" exact>
        <Login/>
      </Route>
      <Route path="/signup" exact>
        <Signup/>
      </Route>
       <Route path="" exact>
         <Home/>
       </Route>
     

        </Switch>
      </BrowserRouter>
   
    </div>
  
  );
}

export default App;
