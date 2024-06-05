import React  from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default function Fleet()
{
    return (
        <>
            <div style={{backgroundColor:"rgb(37, 56, 56)"}} className="w-100 border border-5 border-start-0 border-bottom-0 border-end-0 border-danger text-white py-5 d-flex justify-content-center">
                <div style={{width:"90%"}} className="pt-5">
                    <div className="py-5">
                        <h3>Our Fleets</h3>
                        <p style={{fontWeight:200}}>Checkout some of our latest fleets of cars</p>
                    </div>
                    <OwlCarousel smartSpeed={2000} className="owl-theme" responsive={{0:{items:1},600:{items:4}, 1000:{items:4}}} autoplay={true} loop={true} nav margin={10}>
                        <div className="item w-100">
                            <div style={{width:"100%", height:"300px"}}>
                                <img src="fleets/1.jpeg" className="w-100 h-100" style={{objectFit:"cover"}} alt="" />
                            </div>
                            <h4 className="my-3">Range Rover Vila</h4>
                            <p style={{fontWeight:200}}>Insured, leather interior, rain sensor, air conditioning.</p>
                        </div>
                        <div className="item w-100">
                            <div style={{width:"100%", height:"300px"}}>
                                <img src="fleets/2.jpeg" className="w-100 h-100" style={{objectFit:"cover"}} alt="" />
                            </div>
                            <h4 className="my-3">Range Rover Evoke</h4>
                            <p style={{fontWeight:200}}>Insured, leather interior, rain sensor, air conditioning.</p>
                        </div>
                        <div className="item w-100">
                            <div style={{width:"100%", height:"300px"}}>
                                <img src="fleets/3.jpeg" className="w-100 h-100" style={{objectFit:"cover"}} alt="" />
                            </div>
                            <h4 className="my-3">Toyota Prado</h4>
                            <p style={{fontWeight:200}}>Insured, leather interior, rain sensor, air conditioning.</p>
                        </div>
                        <div className="item w-100">
                            <div style={{width:"100%", height:"300px"}}>
                                <img src="fleets/4.jpeg" className="w-100 h-100" style={{objectFit:"cover"}} alt="" />
                            </div>
                            <h4 className="my-3">Toyoto Land Cruiser</h4>
                            <p style={{fontWeight:200}}>Insured, leather interior, rain sensor, air conditioning.</p>
                        </div>
                        <div className="item w-100">
                            <div style={{width:"100%", height:"300px"}}>
                                <img src="fleets/5.jpeg" className="w-100 h-100" style={{objectFit:"cover"}} alt="" />
                            </div>
                            <h4 className="my-3">Toyota Hilux</h4>
                            <p style={{fontWeight:200}}>Insured, leather interior, rain sensor, air conditioning.</p>
                        </div>
                        <div className="item w-100">
                            <div style={{width:"100%", height:"300px"}}>
                                <img src="fleets/6.jpeg" className="w-100 h-100" style={{objectFit:"cover"}} alt="" />
                            </div>
                            <h4 className="my-3">Lexus 570</h4>
                            <p style={{fontWeight:200}}>Insured, leather interior, rain sensor, air conditioning.</p>
                        </div>
                        <div className="item w-100">
                            <div style={{width:"100%", height:"300px"}}>
                                <img src="fleets/7.jpeg" className="w-100 h-100" style={{objectFit:"cover"}} alt="" />
                            </div>
                            <h4 className="my-3">Toyota Land Cruiser</h4>
                            <p style={{fontWeight:200}}>Insured, leather interior, rain sensor, air conditioning.</p>
                        </div>
                        <div className="item w-100">
                            <div style={{width:"100%", height:"300px"}}>
                                <img src="fleets/8.jpeg" className="w-100 h-100" style={{objectFit:"cover"}} alt="" />
                            </div>
                            <h4 className="my-3">Toyota Sequoia</h4>
                            <p style={{fontWeight:200}}>Insured, leather interior, rain sensor, air conditioning.</p>
                        </div>
                        <div className="item w-100">
                            <div style={{width:"100%", height:"300px"}}>
                                <img src="fleets/9.jpeg" className="w-100 h-100" style={{objectFit:"cover"}} alt="" />
                            </div>
                            <h4 className="my-3">Rolls Royce</h4>
                            <p style={{fontWeight:200}}>Insured, leather interior, rain sensor, air conditioning.</p>
                        </div>
                        <div className="item w-100">
                            <div style={{width:"100%", height:"300px"}}>
                                <img src="fleets/10.jpeg" className="w-100 h-100" style={{objectFit:"cover"}} alt="" />
                            </div>
                            <h4 className="my-3">Lexus 460</h4>
                            <p style={{fontWeight:200}}>Insured, leather interior, rain sensor, air conditioning.</p>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </>
    )
}