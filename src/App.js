import Login from 'screen/login';
import Home from './screen/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import LoginHandle from 'components/login-handle';

function App() {

  return (
    <BrowserRouter>
      <ToastContainer />
      <LoginHandle />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
