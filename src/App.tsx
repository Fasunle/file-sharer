import {Routes, Route} from 'react-router-dom';
import Auth from './components/Auth';
import Signup from './components/Auth/Signup';
import File from './components/File';
import Files from './components/Files';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route element={<Signup />} path='/auth/signup' />
      <Route element={<Auth />} path='/auth/reset' />
      <Route element={<Auth />} path='/auth/login' />
      <Route element={<Files />} path='/files' />
      <Route element={<File />} path='/files/:downloadLink' />
      <Route element={<Home />} path='/' />
    </Routes>
  );
}

export default App;
