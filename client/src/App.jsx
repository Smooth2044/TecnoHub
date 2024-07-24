import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import TaskFormPage from './pages/TaskFormPage';
import TasksPage from './pages/TasksPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ProtectedRoute from './ProtectedRoute';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>//Publico 'todos pueden verlo'
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App;