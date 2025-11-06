import "./Login.css";
import {useNavigate} from "react-router-dom";
import { useState } from 'react';
const Login = () => {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        if (username=="admin" && password=="admin"){
            console.log("Login OK")
            localStorage.setItem("isLoggedIn", "true");
            navigate("/actividades");
        }else{
            console.log("Login Incorrecto")
        }
    }
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Iniciar Sesion</h2>
        <input 
            type="text" 
            placeholder="Usuario" 
            value={username} 
            onChange={(e) => setusername(e.target.value)} 
            required 
        />
        <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setpassword(e.target.value)} 
            required 
        />
        <button type="sumbit">Ingresar</button>
      </form>
    </div>
  );
};
export default Login;
