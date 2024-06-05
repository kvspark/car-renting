import React from "react";
import { Link } from "react-router-dom";

export default function DashboardHeader()
{
    return (
        <>
            <div className="w-100 bg-dark py-2 d-flex justify-content-center">
                <div style={{width:"90%"}} className="text-white d-flex justify-content-between">
                    <div className="logo d-flex align-items-center">
                        <h4 style={{fontWeight:300}}>MCR</h4>
                    </div>
                    <div className="menu" style={{fontSize:"12px"}}>
                        <Link className="text-white text-decoration-none m-1" to="/rent">Rent</Link>
                        <Link className="text-white text-decoration-none m-1" to="/dashboard">Brands</Link>
                        <Link className="text-white text-decoration-none m-1" to="/cars">Cars</Link>
                        <Link className="btn btn-danger m-1" to="/logout">Logout</Link>
                    </div>
                </div>
            </div>
        </>
    )
}