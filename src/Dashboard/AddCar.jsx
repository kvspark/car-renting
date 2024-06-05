import React, { useEffect, useState } from "react";
import DashboardHeader from "./Component/DashboardHeader";
import { Link, useNavigate } from "react-router-dom";


export default function AddCar()
{
    const [data, setData] = useState([])
    const [message, setMessage] = useState([]); 
    const navigate = useNavigate()
    
    const [isLogin, setIsLogin] = useState('')
    const email = sessionStorage.getItem('email');
    useEffect(() => {
        setIsLogin(email)
    },[])
    
    
    if(!isLogin)
    {
        navigate('/')
    }


    useEffect(() => {
        const getBrands = async () => {
            const url = await fetch('https://www.matteecarsrentals.com/carrent/api/all-brands')
            const response = await url.json()
            setData(response.brands);
            console.log(response.brands);
        }
        getBrands()
    },[]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const url = await fetch('https://www.matteecarsrentals.com/carrent/api/post-car',{
            method:'POST',
            body: formData,
        })
        const response = await url.json()
        setMessage(response);
        console.log(response);
        if(response.status == 200)
        {
            navigate('/cars')
        }
    }


    return (
        <>
            <DashboardHeader />
            <div className="d-flex justify-content-center">
                <div style={{width:"90%"}}>
                    <div className="py-3 d-flex justify-content-between">
                        <Link to="/cars"> All Cars</Link>
                        <Link to="/add-car"> Add Car</Link>
                    </div>
                    <h4>Add Car </h4>
                    {message.status == 400 ? (
                        <div className="alert alert-danger"> {message.message} </div>
                    ) : ""}
                    {message.status == 200 ? (
                        <div className="alert alert-success"> Car Added Successfully </div>
                    ) : ''}
                    <form onSubmit={handleSubmit} action="" encType="multipart/form-data" className="my-4">
                            <select name="brand_id" style={{height:"50px"}} className="form-control mb-3"> 
                                <option value>Select Brand</option>
                                {data.map(myBrand => (
                                    <option key={myBrand.id} value={myBrand.brands}> {myBrand.brands} </option>
                                ))}
                            </select>
                            <input name="car_name" style={{height:"50px"}} placeholder="Car Name" type="text" className="form-control mb-3" />
                            <input name="car_image" style={{height:"50px"}}  type="file" className="form-control mb-3" />
                            <input name="car_description" style={{height:"50px"}} placeholder="Car Description" type="text" className="form-control mb-3" />
                            <button className="btn btn-dark">Add Car</button>
                    </form>
                </div>
            </div>
        </>
    )
}