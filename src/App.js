import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import WWC from './components/WorkWithComponents';
import Home from './Home'
import Links from './components/Links';
import Movies from './components/Movies/MovieList';
import MovieInfo from './components/Movies/MovieInfo';
import MovieFilter from './components/Movies/MovieFilter';
import W270922 from './components/W27092022';

function App() {
  return (
    <Router>
      <Links/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/Components*' element={<WWC/>} />
        <Route exact path='/Movies' element={<Movies/>} />
        <Route exact path='/Movies/:id' element={<MovieInfo/>} />
        <Route exact path='/Movies/search/:query' element={<MovieFilter/>} />
        <Route exact path='/270922' element={<W270922/>} />
      </Routes>
    </Router>
  );
}

export default App;
