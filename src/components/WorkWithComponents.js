import React from 'react';
import {useState} from "react";
//import './App.css';
import FC from './FuncComponent';
import CC from './ClassComponent';

function WWC() {

  const [FuncName, setFuncName] = useState("Func")
  const [ClasName, setClasName] = useState("Class")

  const changeFuncName = (newName) => {
    setFuncName(newName)
  }
  const changeClasName = (newName) => {
    setClasName(newName)
  }

  return (
    <div>
      <h1>{FuncName}</h1>
      <FC name={FuncName} setName={changeFuncName}/>
      <br/>
      <br/>
      <br/>
      <h1>{ClasName}</h1>
      <CC name={ClasName} setName={changeClasName}/>
    </div>
  );
}

export default WWC;
