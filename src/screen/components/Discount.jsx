import React from "react";
import './Discount.css'
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";



export default function Discount()
{
    useEffect(() => {
        Aos.init({
            once:true,
        })
    },[]);
    return (        
        <>
            <div className="discount">
                <img src="cars/8.jpg" alt="" />
                <div className="overlay"></div>
                <div className="text-holder d-flex align-items-center">
                    <div className="text-box text-center text-white">
                        <h3 style={{fontWeight:300}} data-aos="zoom-in" data-aos-duration="1000">Not only to parties, weddings, casinos and birthdays, but anywhere you want to go!</h3>
                    </div>
                </div>
            </div>
        </>
    );
}