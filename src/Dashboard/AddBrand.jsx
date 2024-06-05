import React from "react";
import DashboardHeader from "./Component/DashboardHeader";
import AddBrandForm from "./Component/AddBrandForm";
import { Link } from "react-router-dom";


export default function AddBrand()
{
    return (
        <>
            <DashboardHeader />
            <AddBrandForm />
        </>
    )
}