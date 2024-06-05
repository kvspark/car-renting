import React, { useEffect } from "react";
import './Hero.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useState } from "react";
import { Link } from "react-router-dom";




export default function Hero()
{
    const [menuBtn, setMenuBtn] = useState(false);
    const [msg, setMsg] = useState('')


    const toggle = () => {
        setMenuBtn(
            menuBtn => !menuBtn
        );
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const url = await fetch('https://www.matteecarsrentals.com/carrent/api/post-rent',{
            method:'POST',
            body:formData
        })
        const response = await url.json()
        console.log(response);
        setMsg(response)
    }
    

    return (
        <section id="hero">
            <OwlCarousel className='owl-theme heroslider' smartSpeed={5000} items={1} loop autoplay={true} margin={0}  >
                <div className='item'>
                    <img src="cars/4.jpg" alt="" />
                </div>
                <div className='item'>
                    <img src="cars/10.jpg" alt="" />
                </div>
                <div className='item'>
                    <img src="cars/1.jpg" alt="" />
                </div>
                <div className='item'>
                    <img src="cars/6.jpg" alt="" />
                </div>
            </OwlCarousel>
            <div className="overlay"></div>
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
                                <Link to="about">About Us</Link>
                            </li>
                            <li>
                                <Link to="service">Service</Link>
                            </li>
                            <li>
                                <Link to="our-fleets">Our Fleets</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="header-footer w-100 py-2 d-flex justify-content-center">
                    <div style={{width:"90%"}} className="text-white">
                        <div className="hf-maxwidth">
                            <h3 style={{fontWeight:300}}>Need To Rent A Luxury Car? Send A Request.</h3>
                            <p>Complete the form below and we'll contact you as soon as possible</p>
                        </div>
                        <div className="w-100 text-white">
                            {msg.status == 200 ? (
                                <p style={{fontWeight:900, color:"yellow"}}>Request send. We will contact you soon</p>
                            ) : ''}
                            
                            <form method="post" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-2 ml-2 mb-2">
                                    <label style={{fontSize:"11px"}}>Names</label>
                                        <input required type="text" style={{height:'50px'}} className="w-100 form-controls border border-start-0 border-top-0 border-end-0 bg-transparent" placeholder="Full Name" name="full_name" />
                                    </div>
                                    <div className="col-md-2 ml-2 mb-2">
                                        <label style={{fontSize:"11px"}}>Telephone</label>
                                        <input required type="text" style={{height:'50px'}} className="w-100 form-controls border border-start-0 border-top-0 border-end-0 bg-transparent" placeholder="Phone" name="phone_number" />
                                    </div>
                                    
                                    <div className="col-md-2 ml-2 mb-2">
                                        <label style={{fontSize:"11px"}}>Destination</label>
                                        <input required type="text" style={{height:'50px'}} className="w-100 form-controls border border-start-0 border-top-0 border-end-0 bg-transparent" placeholder="Destination" name="description" />
                                    </div>
                                    <div className="col-md-1 ml-2 mb-2">
                                        <label style={{fontSize:"11px"}}>Duration</label>
                                        <select required style={{height:'50px'}} className="form-controls w-100 border border-start-0 border-top-0 border-end-0 bg-transparent" name="duration">
                                            <option value>Duration</option>
                                            <option>12 Hours Stretch </option>
                                            <option>24 Hours Stretch</option>
                                            <option>1 Day</option>
                                            <option>2 Days</option>
                                            <option>3 Days</option>
                                            <option>4 Days</option>
                                            <option>5 Days</option>
                                            <option>6 Days</option>
                                            <option>1 Month</option>
                                            <option>2 Months</option>
                                            <option>3 Months</option>
                                            <option>6 Months</option>
                                            <option>12 Months</option>
                                        </select>
                                    </div>
                                    <div className="col-md-2 ml-2 mb-2">
                                        <label style={{fontSize:"11px"}}>Start Date</label>
                                        <input required type="date" style={{height:'50px'}} className="w-100 form-controls border border-start-0 border-top-0 border-end-0 bg-transparent" name="start_date" />
                                    </div>
                                    <div className="col-md-2 ml-2 mb-2">
                                        <label style={{fontSize:"11px"}}>End Date</label>
                                        <input required type="date" style={{height:'50px'}} className="w-100 form-controls border border-start-0 border-top-0 border-end-0 bg-transparent" name="end_date" />
                                    </div>
                                    <div className="col-md-1 ml-2 mb-2">
                                    <label style={{fontSize:"11px"}}> &nbsp; </label>
                                        <button style={{height:'50px'}} className="w-100 btn btn-outline-light"> Send </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}