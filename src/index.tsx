import React from 'react';
import ReactDOM from 'react-dom/client';
import FunctionalComponents from './Components/FunctionalComponents';
import ClassComponents from "./Components/ClassComponents";
import Events from "./Components/Events";
import './index.css'
import Contex from "./Contex/Contex";
import UseContext from "./Components/Hooks/UseContext";
import Hooks from "./Components/Hooks/Hooks";
import UseReducer from "./Components/Hooks/UseReducer";
import Navbar from "./Components/Navbar";
import {BrowserRouter, Routes,Route} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
      <Routes>
          <Route path={'/'} element={<Navbar/>}>
              <Route index element={<FunctionalComponents/>}/>
              <Route path={'/about'} element={<ClassComponents/>}/>
              <Route path={'/contact'} element={<UseContext/>}/>
          </Route>
      </Routes>
  </BrowserRouter>
);

