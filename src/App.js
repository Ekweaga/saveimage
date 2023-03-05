import logo from './logo.svg';
import './App.css';
import Home from './home';
import Gallery from './gallery';
import Uploadform from './uploadform';
import {BrowserRouter,Switch,Link,Route,useHistory} from 'react-router-dom'
import {Redirect} from 'react-router'
import Login from './login';
import Signup from './signup';
import {useEffect} from 'react'
import Footer from './Footer';
import About from './About';


function App() {
  const token = JSON.parse(localStorage.getItem('token'))
  useEffect(()=>{
      

  },[])
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path="/upload" exact>
       {token ? <Uploadform/>:<Redirect to="/login"/> } 
      </Route>
      <Route path="/login" exact>
        <Login/>
      </Route>
      <Route path="/signup" exact>
        <Signup/>
      </Route>
      <Route path="/library" exact>
      {token ?  <Gallery/>:<Redirect to="/login"/> } 
     
     </Route>
       <Route path="/" exact>
         <Home/>
       </Route>

       <Route path="/about" exact>
        <About/>
       </Route>
   

        </Switch>
        <div className="bottom"></div>
      
      </BrowserRouter>
    
   
    </div>
  
  );
}

export default App;
