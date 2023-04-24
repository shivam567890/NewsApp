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
        <Route exact  path='/' element={ <News setProgress={setProgress}  key="Current News" country="in" category="general"/>}/>
          <Route exact  path='/general' element={ <News setProgress={setProgress}  key="general" country="in" category="general"/>}/>
          <Route exact  path='/science' element={ <News setProgress={setProgress}  key="science" country="in" category="science"/>}/>
          <Route exact  path='/business' element={ <News setProgress={setProgress}  key="business" country="in" category="business"/>}/>
          <Route exact  path='/health' element={ <News setProgress={setProgress}  key="health" country="in" category="health"/>}/>
          <Route exact  path='/entertainment' element={ <News setProgress={setProgress}  key="entertainment" country="in" category="entertainment"/>}/>
          <Route exact  path='/technology' element={ <News setProgress={setProgress}  key="technology" country="in" category="technology"/>}/>
          <Route exact  path='/sports' element={ <News setProgress={setProgress}  key="sports" country="in" category="sports"/>}/>
             </Routes>
             </Router>
      </div>
    )

}

export default App;