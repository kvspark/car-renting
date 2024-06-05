import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddBrandForm()
{
    const [brand, setBrand] = useState()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    const postBrand = async () => {
        setLoading(true)
        const url = await fetch('https://www.matteecarsrentals.com/carrent/api/add-brand',{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({brands: brand})
        })
        const response = await url.json();
        setData(response);
        setLoading(false)
        setBrand('')
        console.log(response);
    }

    return (
        <>
            <div className="w-100 d-flex justify-content-center">
                <div className="py-5" style={{width:"90%"}}>
                    <div className="w-100 d-flex py-3 justify-content-between">
                        <Link to="/dashboard">All Brand</Link>
                        <Link to="/add-brand">Add Brand</Link>
                    </div>
                    <h3>Add Brand</h3>
                    {data.status == 400 ? (
                        <div className="alert alert-danger my-3">
                            {data.message}
                        </div>
                    ) : ""}
                    {data.brands ? (
                        <div className="alert alert-success"> Brand Added Successful </div>
                    ) : ""}
                    <div className="py-3">
                        <input value={brand} onChange={(event) => setBrand(event.target.value)} type="text" style={{height:"50px"}} placeholder="Enter Car Brand (eg Toyota)" className="mb-3 form-control" />
                        {loading ? (<button className="btn btn-light">Loading...</button>) : (<button className="btn btn-dark" onClick={postBrand}>Add Brand</button>)}
                    </div>
                </div>
            </div>
        </>
    )
}