import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LOGIN_DETAILS } from "../../constant";


function LoginHandle() {
    const navigate = useNavigate();

useEffect(()=>{
    const data = JSON.parse(localStorage.getItem('LOGIN_DETAILS'));
    if(!data || (data?.name !== LOGIN_DETAILS.name && data?.password !== LOGIN_DETAILS.password )){
        navigate('/login')
    }else{
        navigate('/')
    }
}, []);
  return null
}

export default LoginHandle
