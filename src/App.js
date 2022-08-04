import logo from './logo.svg';
import './App.css';
import Home from './home';
import Gallery from './gallery';
import Uploadform from './uploadform';
import {BrowserRouter,Switch,Link,Route,useHistory} from 'react-router-dom'
import Login from './login';
import Signup from './signup';
import {useEffect} from 'react'


function App() {
  const token = JSON.parse(localStorage.getItem('token'))
  useEffect(()=>{
      

  },[])
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path="/upload" exact>
       {token ? <Uploadform/>:<Login/> } 
      </Route>
      <Route path="/login" exact>
        <Login/>
      </Route>
      <Route path="/signup" exact>
        <Signup/>
      </Route>
      <Route path="/library" exact>
      <Gallery/>
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
