import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BrandComponent()
{
    const [data, setData] = useState([]);
    const [deleteBd, setDeleteBd] = useState(false)


    useEffect(() => {
        const getBrands = async () => {
            const url = await fetch('https://www.matteecarsrentals.com/carrent/api/all-brands')
            const response = await url.json()
            setData(response.brands);
            console.log(response.brands);
        }
        getBrands()
    },[deleteBd]);

    const deleteBrand = async (id) => {
        const url = await fetch('https://www.matteecarsrentals.com/carrent/api/delete-brand/' + id)
        const response = await url.json();
        setDeleteBd(response);
    }
    return (
        <>
            <div className="w-100 d-flex justify-content-center">
                <div className="py-5" style={{width:"90%"}}>
                    <div className="d-flex justify-content-between py-3">
                        <Link to="/dashboard">All Brands</Link>
                        <Link to="/add-brand">Add Brand</Link>    
                    </div>
                    
                    <h2 className="my-3">All Brands</h2>
                    
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Brands</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(brand => (
                                <tr>
                                    <td key={brand.id}>{brand.brands}</td>
                                    <td>
                                        <button onClick={() => deleteBrand(brand.id)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}