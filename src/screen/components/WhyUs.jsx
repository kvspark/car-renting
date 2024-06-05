import React, { useEffect } from "react";
import './WhyUs.css'
import Aos from "aos";
import 'aos/dist/aos.css'

export default function WhyUs()
{
    useEffect(() => {
        Aos.init({
            once:true,
        })
    },[])
    return (
        <>
            <div style={{backgroundColor:"rgb(57, 56, 86)"}} className="w-100">
                <div className="d-flex whyus">
                    <div className="col-md-7">
                        <div className="w-100" style={{height:"700px"}}>
                            <img  data-aos="flip-up" data-aos-duration="1000" src="cars/5.jpg" className="w-100 h-100" style={{objectFit:"cover"}} alt="" />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div data-aos="fade-down" data-aos-duration="1000" className="w-100 pt-5 px-3 text-white">
                            <p style={{letterSpacing:"1.5px"}}>Why Choose Us?</p>
                            <h2 style={{fontWeight:300}}>Do you need a car for that event, then Mattee Car Rental got you cover.</h2>
                            <p style={{fontWeight:200}} className="mt-5">We’re a luxury brand in Nigeria here to make your life even more enjoyable. We value time and customer-company relationships.</p>
                            <p style={{fontWeight:200}} className="mt-5">Let us handle all your affairs and have some time to actually enjoy your trips. You can also make online bookings from the comfort of your home!</p>
                            <p style={{fontWeight:200}} className="mt-5">We provide Wedding, Escourt, and Security Protocol making it an unforgettable experience with the right car, booked through us!</p>
                            <p style={{fontWeight:200}} className="mt-5">We are a reputable car rental company, dedicade in providing top notch cars rental service. </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}