"use client";

import {useEffect,useState} from "react";


export default function page(){
useEffect(async ()=> {
    const response = await fetch("https://dummyjson.com/product");
    const data = await response.json();
    console.log(data);
},[])



    return (
        <div>
            <h1>Product List</h1>
        </div>
    )}
