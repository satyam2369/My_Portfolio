import './App.css';
import { BrowserRouter, Routes, Route, Navigate, HashRouter } from "react-router-dom";

import Home from './containers/Home';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import HireME from './components/HireME';
import Hire from './components/Hire';
import Readmore from './components/Readmore';

function App() {
  return (
    <BrowserRouter>
    {/* <div className="App"> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/achievements' element={<Projects/>} />
      <Route path='/hireme' element={<Hire/>} />
      <Route path='/readmore' element={<Readmore/>} />

      </Routes>
    {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
