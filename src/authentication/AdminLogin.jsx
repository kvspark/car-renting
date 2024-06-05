import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin()
{
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [loginListener, setLoginListener] = useState(false)
    const [data, setData] = useState('');

    const sendLogin = async () => {
       setLoginListener(true) 
       const result = await fetch('https://www.matteecarsrentals.com/carrent/api/login-admin',{
            method: "POST",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({email: email, password: password}),
       })
       setLoginListener(false)
       const response = await result.json();
       setData(response)
       if(response.status == 200)
        {
            sessionStorage.setItem('email',response.user.email);
            navigate('/dashboard')

        }
    }

    return (
        
        <>
            <div style={{backgroundColor:"black"}} className="w-100 vh-100 d-flex justify-content-center align-items-center">
                <div className="p-3 bg-white" style={{width:"90%", maxWidth:"400px"}}>
                    <h4 style={{fontWeight:200}}>Admin Login </h4>
                    {data.error ? (
                        <div style={{fontSize:"12px"}} className="alert alert-danger">
                            {data.message}
                        </div>
                    ) : ''}
                    <div className="form">
                        <input value={email} onChange={(event) => setEmail(event.target.value)} type="text" style={{height:"50px"}} placeholder="Email Address" className="mb-3 form-control" />
                        <input value={password} onChange={(event) => setPassword(event.target.value)} type="text" style={{height:"50px"}} placeholder="Password" className="mb-3 form-control" />
                        {loginListener ? (<button className="btn btn-light">Loading..</button>) : (<button onClick={() => sendLogin()} className="btn btn-dark">Login</button>)}
                    </div>
                </div>
            </div>
        </>
    );
}