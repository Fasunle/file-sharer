import {Routes, Route} from 'react-router-dom';
import Auth from './components/Auth';
import File from './components/File';
import Files from './components/Files';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route element={<Auth />} path='/login' />
      <Route element={<Files />} path='/files' />
      <Route element={<File />} path='/files/:id' />
      <Route element={<Home />} path='/' />
    </Routes>
  );
}

export default App;
