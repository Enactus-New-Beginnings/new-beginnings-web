import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Jumbotron} from 'react-bootstrap';
import {HashRouter as Router, Route} from 'react-router-dom';
import {Mentorship} from './components/Mentorship';
import Resources from './components/Resources';
import Employment from './components/Employment';
import {MobileApp} from './components/MobileApp';
import {SignIn} from './components/SignIn';
import {Home} from './components/Home';
import {Register} from './components/Register';
import { NavigationBar } from './components/NavigationBar';
import { Helmet } from 'react-helmet';
import "./styles.css";
import firebase from './components/Firebase.js'

function App(){
  const [logged, setLogged]=React.useState(false)
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setLogged(true)
    } else{
      setLogged(false)
    }
  });
    return (
      <>
      <div>
        <Helmet>
          <title> New Beginnings </title>
        </Helmet>
      </div>
      <Jumbotron fluid className = "jumbo-main"/>
      
      <NavigationBar/>
      <div className = "space20"></div>
        <Router>

         <Route path = "/" exact component = {Home} />
         <Route path = "/mentorship" exact component = {Mentorship} />
         <Route path = "/resources" >
           <Resources/>
         </Route>
         <Route path = "/employment" >
           <Employment/>
          </Route>
         <Route path = "/mobileapp" exact component = {MobileApp} />
         <Route path = "/signin" exact  component = {()=><SignIn logged={logged}/>} logged={logged} />
         <Route path = "/register" exact component = {()=><Register logged={logged}/>} logged={logged} />
         
        </Router>

      </>
    );
}

export default App;