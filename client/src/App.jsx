import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RegisterPage from './pages/RegisterPage.jsx';
import LoginPage from './pages/LoginPage.jsx';

function App(){
  return(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<h1> Pagina de inicio</h1>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/register' element={<RegisterPage/>}></Route>
      <Route path='/tasks' element={<h1> Pagina de tarea</h1>}></Route>
      <Route path='/add-task' element={<h1> Nueva tarea</h1>}></Route>
      <Route path='/tasks/:id' element={<h1> Actualizar tarea</h1>}></Route>
    </Routes>
  </BrowserRouter>
);
  
}
export default App;