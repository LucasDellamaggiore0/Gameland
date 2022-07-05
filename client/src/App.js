
import './App.css';
// import { GET_GAMES } from './redux/actions';
// import {useDispatch, useSelector} from 'react-redux';
// import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';

function App() {
  // const dispatch = useDispatch();
  // const {games} = useSelector(state => state.reducer);
  
  // useEffect(() => {
  //   dispatch(GET_GAMES());
  // }, [dispatch]);
  
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<div>Hello World</div>} />
      </Routes>
    </>
  );
}

export default App;
