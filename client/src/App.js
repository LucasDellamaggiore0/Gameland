
import './App.css';
import { GET_GAMES } from './redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const {games} = useSelector(state => state.reducer);
  useEffect(() => {
    dispatch(GET_GAMES());
  }, [dispatch]);

  console.log(2, games)
  return (
    <div className="App">
      <h1>Games</h1>
    </div>
  );
}

export default App;
