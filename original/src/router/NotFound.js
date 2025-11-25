import { Link, Navigate } from "react-router-dom";

import React,{useRef, useEffect, useState } from "react";

export default function NotFound() {
    useEffect(() => {
    },[]);


    return (
        <div>
            404: wrong path
            <Navigate to="/" />;
        </div>
    );
};