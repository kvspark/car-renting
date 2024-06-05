import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

export default function Service()
{
    useEffect(() => {
        Aos.init({
            once:true,
        })
    },[]);
    return (
        <>
            <div style={{backgroundColor:"rgb(57, 56, 56)"}} className="w-100 d-flex justify-content-center py-5">
                <div style={{width:"90%"}} className="py-5">
                    <div className="row py-5">
                        <div className="col-12">
                            <div className="w-100 text-white mb-3">
                                <h3 style={{fontWeight:300}}>Our Services</h3>
                                <p style={{fontSize:"16px", letterSpacing:"1.52px"}}>Are Top Notch </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-up" data-aos-duration="1000" className="row text-white">
                        <div className="col-md-4">
                            <div className="w-100 p-2">
                                <h4>Car Renting</h4>
                                <p style={{fontWeight:200}}> 
                                    We have a range of options for you!
                                    Car Renting Services for any parties (Wedding, birth, convocation, naming ceremony, celebration of life, etc). Make a grand entrance and steal the show with our fleet of luxurious and stylish cars. 
                                    From sleek sports cars to elegant limousines, we have every type of vehicle that will make heads turn. Let us take your experience to the next level and make your night party a memorable one.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="w-100 p-2">
                                <h4>Escourt Services</h4>
                                <p style={{fontWeight:200}}> 
                                    We provide Escourt Services and Security Protocol that makes it an unforgettable experience with the right car booked through us. Our extensive selection of luxurious vehicles are sure to impress even the most discerning guests.. With our exceptional service, you’re sure to create lasting memories of this special day. 
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="w-100 p-2">
                                <h4>Airport Pickup and Dropoff</h4>
                                <p style={{fontWeight:200}}> 
                                    You can easily rent one of our reliable and comfortable cars for a hassle-free airport transfer. With our exceptional service, you can enjoy a smooth and enjoyable ride to your destination without any stress or worries. Don’t hesitate to book with us for your next airport transfer!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}