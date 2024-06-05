import React, { useEffect, useState }  from "react";
import HeroAlt from "../components/HeroAlt";
import Fleet from "../components/Fleet";
import Footer from "../components/Footer";



export default function OurFleets()
{
    const [data, setData] = useState([]);

    useEffect(() => {
        const getCars = async () => {
            const url = await fetch('https://www.matteecarsrentals.com/carrent/api/all-cars')
            const response = await url.json();
            if(response.status == 200)
            {
                setData(response.cars);
            }
        }
        getCars();
    },[])
    return (
        <>
            <HeroAlt img="cars/8.jpg" title="Our Fleets" body="Check our car fleet" />
            <div style={{backgroundColor:"rgb(16, 0, 20)"}} className="w-100 text-white py-5 d-flex justify-content-center">
                <div style={{width:"90%"}}>
                    <div className="row">
                        {data.map(myCars => (
                            <div className="col-md-4">
                            <div className="w-100 p-3">
                                <div className="w-100 mb-3" style={{height:"250px"}}>
                                    <img src={myCars.car_image} className="w-100 h-100" style={{objectFit: 'cover'}} alt="" />
                                </div>
                                <h4 style={{fontWeight:300}}> {myCars.car_name} </h4>
                                <p className="text-danger m-0">{myCars.brand_id}</p>
                                <p  style={{fontWeight:200, letterSpacing:"1.3px", fontSize:"14px"}}>{myCars.car_descrription}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            <Fleet />
            <Footer />
        </>
    );
}