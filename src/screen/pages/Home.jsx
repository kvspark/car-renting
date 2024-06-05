import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Discount from "../components/Discount";
import Service from "../components/Service";
import WhyUs from "../components/WhyUs";
import Fleet from "../components/Fleet";
import Footer from "../components/Footer";

export default function Home()
{
    return (
        <>
            <Hero />
            <About />
            <Discount />
            <Service />
            <WhyUs />
            <Fleet />
            <Footer />

        </>
    );
}