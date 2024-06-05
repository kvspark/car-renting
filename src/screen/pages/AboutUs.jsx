import React from "react";
import HeroAlt from "../components/HeroAlt";
import About from "../components/About";
import WhyUs from "../components/WhyUs";
import Footer from "../components/Footer";



export default function AboutUs()
{
    return (
        <>
            <HeroAlt title="About Us" body="Learn More About Mattee Cars Rentals" img="cars/1.jpg"/>
            <About />
            <WhyUs/>
            <Footer />
            

        </>
    )
}