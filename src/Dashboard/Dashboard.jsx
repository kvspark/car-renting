import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DashboardHeader from "./Component/DashboardHeader";
import BrandComponent from "./Component/BrandComponent";

export default function Dashboard()
{
    const signOut = (event) => {
        event.preventDefault()
        alert('working')
    }
    const [isLogin, setIsLogin] = useState('')
    const email = sessionStorage.getItem('email');
    useEffect(() => {
        setIsLogin(email)
    },[])
    
    const navigate = useNavigate();
    if(isLogin)
        {
            return (
                <>
                    <DashboardHeader />
                    <BrandComponent />
                </>
            )
        }else{
            navigate('/');
        }
}