import './App.css';
import React, { useState } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';


import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App=()=> {
 const api_key='777fab8b175e40f39350bbecdabc6747';
 const [progress, setProgress] = useState(0)
 
    return (
      <div >
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => (setProgress(0))}
      />
        <Routes>
        <Route exact  path='/' element={ <News setProgress={setProgress} api_key={api_key} key="Current News" country="us" category="general"/>}/>
          <Route exact  path='/general' element={ <News setProgress={setProgress} api_key={api_key} key="general" country="us" category="general"/>}/>
          <Route exact  path='/science' element={ <News setProgress={setProgress} api_key={api_key} key="science" country="us" category="science"/>}/>
          <Route exact  path='/business' element={ <News setProgress={setProgress} api_key={api_key} key="business" country="us" category="business"/>}/>
          <Route exact  path='/health' element={ <News setProgress={setProgress} api_key={api_key} key="health" country="in" category="health"/>}/>
          <Route exact  path='/entertainment' element={ <News setProgress={setProgress} api_key={api_key} key="entertainment" country="us" category="entertainment"/>}/>
          <Route exact  path='/technology' element={ <News setProgress={setProgress} api_key={api_key} key="technology" country="us" category="technology"/>}/>
          <Route exact  path='/sports' element={ <News setProgress={setProgress} api_key={api_key} key="sports" country="us" category="sports"/>}/>
             </Routes>
             </Router>
      </div>
    )

}

export default App;