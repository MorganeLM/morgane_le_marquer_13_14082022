import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../redux/redux';
import {useNavigate} from 'react-router-dom';

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username && password){
            fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                        email: username,
                        password: password
                    })
                })
                .then(async response => {
                    const data = await response.json();
                    if (response.ok) {
                        dispatch(userLogin(data.body.token));
                        navigate('/profile');
                    } else {
                        setError(data.message);
                        console.error('response', response);
                    }
                })
                .catch(error => {
                    setError(error.toString());
                    console.error('error', error);
                })
        }else{
            setError('Please fill your username and password.');
        }

     
    }

    return (
    <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="email" 
                   id="username"
                   value={username}
                   onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="text" 
                   id="password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="input-remember">
            <input type="checkbox" 
                   id="remember-me"
                   value={remember}
                   onChange={(e) => setRemember(e.target.checked)} />
            <label htmlFor="remember-me">Remember me</label>
        </div>
        {
          error === "" ?
          "" :
          <div className="error-text">
            {error}
          </div>
        }
        <button className="sign-in-button">Sign In</button>
    </form >);
  }
  
  export default LoginForm;