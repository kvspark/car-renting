import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LogOut()
{
    sessionStorage.removeItem('email')
    const naviate = useNavigate()
    useEffect(() => {
        naviate('/')     
    },[])
}