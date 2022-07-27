import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import NewUser from './components/newUser/NewUser';
import NewGame from './components/game/NewGame';
import Home from './components/home/Home';
import '../src/scss/main.scss'
import AddPlatforms from './components/platforms/AddPlatforms';
import AddGenres from './components/genres/AddGenres';
function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/createAccount" element={<NewUser />} />
        <Route path='/addGame' element={<NewGame/>}/>
        <Route path='/addPlatform' element={<AddPlatforms/>}/>
        <Route path='/addGenres' element={<AddGenres/>}/>
      </Routes>
    </div>
  );
}

export default App;
