import React, { useState } from "react";



export default function AdminRegister()
{
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [clickListener, setClickListener] = useState(false);
    

    const createAccount = async () => {
        setClickListener(clickListener => !clickListener)
        const url = await fetch('https://www.matteecarsrentals.com/carrent/api/create-admin',{
            method : 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, email: email, password: password, confirm_password: confirmPassword })
        })
        const response = await url.json();
        setData(response);
        setClickListener(false)
    }

    return (
        <>
            <div className="w-100 vh-100 d-flex justify-content-center align-items-center" style={{backgroundColor:"black"}}>
                <div style={{width:"90%", maxWidth:"400px"}} className="p-3 bg-light">
                    <h4>Register Admin {data.status == 400 ? (
                        <div className="alert alert-danger">
                            <ul style={{fontSize:"12px"}}>
                                {data.name ? (<li>{data.name}</li>) : ''}
                                {data.email ? (<li>{data.email}</li>) : ''}
                                {data.password ? (<li>{data.password}</li>) : ''}
                                {data.confirm_password ? (<li> {data.confirm_password} </li>) : ''}
                            </ul>
                        </div>
                    ) : ''} </h4>
                    <div className="form">
                        <input value={name} onChange={ (event) => setName(event.target.value) } type="text" className="form-control mb-3" placeholder="Name" style={{height:"50px"}} />
                        <input value={email} onChange={ (event) => setEmail(event.target.value) } type="text" className="form-control mb-3" placeholder="Email Address" style={{height:"50px"}} />
                        <input value={password} onChange={ (event) => setPassword(event.target.value) } type="text" className="form-control mb-3" placeholder="Password" style={{height:"50px"}} />
                        <input value={confirmPassword} onChange={ (event) => setConfirmPassword(event.target.value) } type="text" className="form-control mb-3" placeholder="Confirm Password" style={{height:"50px"}} />
                         {clickListener ? (<button className="btn btn-light">Loading...</button>) : (<button onClick={() => createAccount()} className="btn btn-dark">Register</button>)} 
                    </div>
                </div>
            </div>
        </>
    )
}