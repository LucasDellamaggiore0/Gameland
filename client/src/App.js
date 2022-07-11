import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import NewUser from './components/newUser/NewUser';
import NewGame from './components/game/NewGame';
import Home from './components/home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/createAccount" element={<NewUser />} />
        <Route path='/addGame' element={<NewGame/>}/>
      </Routes>
    </div>
  );
}

export default App;
