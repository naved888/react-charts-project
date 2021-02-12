import LoginApp from './components/Login/Login';
import { React, useState, useEffect, Component} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ColumnChart from './components/ColumnChart/ColumnChart'
import PieChart from './components/PieChart/PieChart'
import { Switch,Route } from "react-router-dom";

 function App() {
   const port = process.env.PORT || 3000;
  return (
    
    <div>
       <Switch>
          <Route exact path="/">
              <LoginApp />
          </Route>
          <Route path="/column-chart">
            <ColumnChart />
          </Route>
          <Route path="/pie-chart">
            <PieChart />
          </Route>
        </Switch>
    </div>
  )
}



export default App