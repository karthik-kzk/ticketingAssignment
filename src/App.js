import React from 'react';
import Land from './landing';
import Homepage from './homePage';
import {
 
  Switch,
  Route,
 
} from "react-router-dom";


export default function App() {
  return (
      <div>
      
        <Switch>
          
          <Route exact path="/">
          <Land/>
          </Route>
          <Route   path="/home">
            <Homepage/>
          </Route>
        </Switch>
      </div>
   
  );
}




