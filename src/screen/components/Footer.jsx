import React from "react";

export default function Footer()
{
    return (
        <>
            <div className="w-100 py-5 d-flex border border-5 border-start-0 border-end-0 border-bottom border-danger justify-content-center" style={{backgroundColor:"rgb(67, 56, 56)"}}>
                <div style={{width:"90%"}} className="py-5">
                    <div className="row text-white">
                        <div className="col-md-4">
                            <div className="w-100 p-2">
                                <h4 style={{fontWeight:200, letterSpacing:"1.5px"}}>Mattee Car Rental</h4>
                                <p style={{fontWeight:200, fontSize:"14px", letterSpacing:"1.2px", lineHeight:"2em"}}>Mattee Car Rental is a reputable company dedicated in customer satisfaction, we ensure that our clients explore their destination with ease and comfort by renting a car from our company...</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="w-100 p-2">
                                <h4 style={{fontWeight:200, letterSpacing:"1.5px"}}>QUICK LINKS</h4>
                                <ul className="ul" style={{fontWeight:200, fontSize:"14px", letterSpacing:"1.2px", lineHeight:"1.6em"}}>
                                    <li style={{}}> <a href="" className="text-decoration-none text-white">Home</a> </li>
                                    <li> <a href="" className="text-decoration-none text-white">About Us</a> </li>
                                    <li> <a href="" className="text-decoration-none text-white">Service</a> </li>
                                    <li> <a href="" className="text-decoration-none text-white">Our Fleets</a> </li>
                                    <li> <a href="" className="text-decoration-none text-white">Contact Us</a> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="w-100 p-2">
                                <ul className="ul" style={{fontWeight:200, fontSize:"14px", letterSpacing:"1.2px", lineHeight:"1.6em"}}>
                                    <li style={{}}> <a href="" className="text-decoration-none text-white"> <i className="fa fa-phone"></i> +234 704 7000 851 </a> </li>
                                    <li> <a href="" className="text-decoration-none text-white"> <i className="fa fa-envelope"></i> info@matteecarsrentals.com </a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor:"black", fontSize:"12px"}} className="text-white w-100 py-1 d-flex justify-content-center">
                <div style={{width:"90%"}} className="py-1">
                    Copyright &copy; 2024 | Alright Reserved by Mattee Car Rental <a href="http://wa.me/+2348100290047">Designed by Jukev Tech</a> 
                </div>
            </div>
        </>
    );
}