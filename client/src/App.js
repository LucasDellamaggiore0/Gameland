
import './App.css';
// import { GET_GAMES } from './redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import NewUser from './components/newUser/NewUser';
import { GET_GENRES, GET_PLATFORMS, GET_GAMES } from './redux/actions';
import NewGame from './components/games/NewGame';

function App() {
  const dispatch = useDispatch();
  const {games, genres, platforms} = useSelector(state => state.reducer);
  
  useEffect(() => {
    dispatch(GET_GAMES());
    dispatch(GET_GENRES());
    dispatch(GET_PLATFORMS());
  }, [dispatch]);
  
  console.log(1, games);
  console.log(2, genres);
  console.log(3, platforms);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/createAccount" element={<NewUser />} />
        <Route path="/" element={<div>Hello World</div>} />
        <Route path='/addGame' element={<NewGame/>}/>
      </Routes>
    </>
  );
}

export default App;
