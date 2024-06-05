import React from "react";
import HeroAlt from "../components/HeroAlt";
import Service from "../components/Service";
import Discount from "../components/Discount";
import Footer from "../components/Footer";

export default function OurService()
{
    return(
        <>
            <HeroAlt title="Our Service" body="No matter your need, we got you cover " img="cars/4.jpg" />
            <Service />
            <Discount />
            <Footer />
        </>
    )
}