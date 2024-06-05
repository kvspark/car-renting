import React, { useEffect, useState } from "react";
import DashboardHeader from "./Component/DashboardHeader";


export default function RentedCar()
{
    const [data,setData] = useState([]);
    const [deleteMsg,setDeleteMsg] = useState([]);
    
    useEffect(() => {
        const getRentedCar = async () => {
            const url = await fetch('https://www.matteecarsrentals.com/carrent/api/all-rents')
            const response = await url.json()
            console.log(response); 
            setData(response)
        }
        getRentedCar()
    },[deleteMsg])

    const deleteRent = async ( id ) => {
        const  url = await fetch('https://www.matteecarsrentals.com/carrent/api/delete-rent/' + id)
        const responseDelete = await url.json()
        setDeleteMsg(responseDelete)
    }
    return (
        <>
            <DashboardHeader />
            <div className="w-100 d-flex py-5 justify-content-center">
                <div style={{width:"90%"}}>
                    <h4>All Rent Request</h4>
                    <table className="my-3 table">
                        <thead>
                            <tr>
                            
                                <th> Full Name </th>
                                <th> Phone Number </th>
                                <th>Destination</th>
                                <th>Duration</th>
                                <th>Car Name</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(rent => (
                                <tr>
                                    <td key={rent.id}> {rent.full_name} </td>
                                    <td key={rent.id}> {rent.phone_number} </td>
                                    <td key={rent.id}> {rent.description} </td>
                                    <td key={rent.id}> {rent.duration} </td>
                                    <td key={rent.id}> {rent.car} </td>
                                    <td key={rent.id}> {rent.start_date} </td>
                                    <td key={rent.id}> {rent.end_date} </td>
                                    <td key={rent.id}> <button onClick={() => deleteRent(rent.id)} className="btn btn-danger"> Delete </button> </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}