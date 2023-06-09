import { Outlet, Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from './pages/home/Home';
import MovieDetail from './pages/MovieDataill/MovieiDetail';
import { useState } from "react";

function App() {

  const [searchValue, setSearchValue] = useState('');
  
  return (
    <>
      <Header onSubmit={(valueInput) => setSearchValue(valueInput)}/>
      <Routes>
        <Route path="/" element={<Home inputValue={searchValue}/>} />
        <Route path="/movie/:id" element={<MovieDetail/>} />
      </Routes>
    </>
  )
}

export default App
