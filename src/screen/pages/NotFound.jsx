import React from "react";
import Footer from "../components/Footer";

export default function NotFound()
{
    return (
        <>
            <div className="w-100 d-flex justify-content-center align-items-center" style={{height:"400px"}}>
                <div style={{width:"80%"}}>
                    <h4>NOT FOUND</h4>
                    <p>It seem this page don't exit...</p>
                </div>
            </div>
            <Footer/>
        </>
    );
}