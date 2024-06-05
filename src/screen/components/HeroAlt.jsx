import React from "react";
import './HeroAlt.css'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function HeroAlt(props)
{
    const [menuBtn, setMenuBtn] = useState(false);

    const toggle = () => {
        setMenuBtn(
            menuBtn => !menuBtn
        );
    }

    return(
        <>
            <div className="w-100 heroalt">
                <img src={props.img} alt="" />
                <div className="text-holder">
                <div className="header w-100 border border-2 border-white py-2 border-start-0 border-top-0 border-end-0 d-flex justify-content-center">
                    <div style={{width:"90%"}} className="d-flex justify-content-between">
                        <div className="logo">
                            <h3 style={{fontWeight:200}} className="text-uppercase">matteecarrental</h3>
                        </div>
                        <div className="contact-holder  d-md-flex">
                            <div className="contact px-3 d-none d-md-flex">
                                <div className="icon d-flex align-items-center px-2">
                                    <i className="fa fa-phone"></i>
                                </div>
                                <div className="tel d-flex align-items-center" style={{fontSize:"12px",letterSpacing:"1.4px" , fontWeight:400}}>
                                    <span className="d-block">+234 704 7000 851</span>
                                </div>
                            </div>
                            <div className="contact px-3 d-none d-md-flex">
                                <div className="icon d-flex align-items-center px-2">
                                    <i className="fa fa-envelope"></i>
                                </div>
                                <div className="address d-flex align-items-center" style={{fontSize:"12px",letterSpacing:"1.4px" , fontWeight:400}}>
                                    <span className="d-block">info@matteecarsrentals.com</span>
                                </div>
                            </div>
                            <div onClick={() => toggle()} className="menu-button px-3 d-flex align-items-center d-block d-md-none">
                                <i className="fa fa-bars" style={{fontSize:"1.5em"}}></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header w-100  py-2 d-flex justify-content-center">
                    <div style={{width:"90%"}}  className={menuBtn ? "d-flex desktop-nav justify-content-between active" : "d-flex desktop-nav justify-content-between"}>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li>
                                <Link to="/service">Service</Link>
                            </li>
                            <li>
                                <Link to="/our-fleets">Our Fleets</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="header-footer w-100 py-2 d-flex justify-content-center">
                    <div style={{width:"90%"}} className="text-white">
                        <div className="hf-maxwidth">
                            <h3 style={{fontWeight:300}}> {props.title} </h3>
                            <p>{props.body}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}