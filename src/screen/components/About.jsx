import React from "react";
import './About.css'
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import { Link } from "react-router-dom";


export default function About()
{
    useEffect(() => {
        Aos.init({
            once: true,
        })     
    },[])
    return (
        <>
            <div className="about py-5 text-white d-flex justify-content-center">
                <div className="max-width py-5">
                    <div className="row py-5">
                        <div className="col-md-6">
                            <div  data-aos="fade-right" data-aos-duration="1000" className="w-100 pr-2">
                                <h3>About Us</h3>
                                <p style={{fontWeight:200, letterSpacing:"1.2px", fontSize:"14px", lineHeight:"2em"}}>
                                Mattee Car Rental is a reputable company dedicated to customer satisfaction. We ensure that our clients explore their destination with ease and comfort. You can easily make your bookings online and through our customer service agents. With a wide selection of vehicles, competitive prices, and excellent customer service, you can trust us to make your trip unforgettable.
                                </p>
                                <Link className="btn btn-outline-light mt-3" style={{height:"50px"}} to="about">Learn More</Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div  data-aos="fade-up" data-aos-duration="1000" className="w-100 pl-2">
                                <img src="cars/12.jpg" className="w-100" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}