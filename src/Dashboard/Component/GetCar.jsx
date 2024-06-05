import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";



export default function GetCar()
{
    const [data, setData] = useState([])
    const [del, setDel] = useState(false)
    const navigate = useNavigate()
    
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
    },[del])

    const trashCar = async (id) => {
        const durl = await fetch('https://www.matteecarsrentals.com/carrent/api/delete-car/' + id)
        const dresponse = await durl.json();
        console.log(dresponse);
        setDel(dresponse)
    }

    return (
        <div className="w-100 d-flex justify-content-center">
            <div className="py-5" style={{width:"90%"}}>
                <div className="py-3 d-flex justify-content-between">
                    <Link to="/cars">All Cars</Link>
                    <Link to="/add-car">Add Cars</Link>
                </div>
                <h4>All Cars</h4>

                <table className="table w-100 mt-3">
                    <thead>
                        <tr>
                            <th>Car Name</th>
                            <th>Car Image</th>
                            <th>Car Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                    <tbody>
                        {data.length == 0 ? (
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        ) : (
                            data.map( myCar => (
                                <tr>
                                    <td key={myCar.id}> {myCar.car_name} </td>
                                    <td key={myCar.id}> 
                                        <div style={{width:"50px", height:"30px"}}>
                                            <img src={myCar.car_image} className="w-100" style={{objectFit:"cover"}} alt="" />
                                        </div> 
                                    </td>
                                    <td key={myCar.id}> {myCar.car_descrription}</td>
                                    <td key={myCar.id}><button className="btn btn-danger" onClick={() => trashCar(myCar.id)}>Delete</button></td>
                                </tr>
                            ) )
                        ) }
                    </tbody>
                </table>
            </div>
        </div>
    )
}