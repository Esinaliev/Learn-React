import React from 'react';
import {useState} from "react";
import { Route, Routes, Link } from 'react-router-dom';
//import './App.css';
import FC from './FuncComponent';
import CC from './ClassComponent';

function WWC() {

  const [name, setName] = useState("Component")

  const changeName = (newName) => {
    setName(newName)
  }

  return (
    <div>
      <h1>{name}</h1>
      <ul>
          <li>
              <Link to="Function" >Function</Link>
          </li>
          <li>
              <Link to="Class" >Class</Link>
          </li>
      </ul>
      <Routes>
          <Route path="/Function" element={<FC name={name} setName={changeName}/>} />
          <Route path="/Class" element={<CC name={name} setName={changeName}/>} />
      </Routes>
    </div>
  );
}

export default WWC;
