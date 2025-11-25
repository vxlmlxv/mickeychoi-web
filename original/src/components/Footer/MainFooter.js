import "./MainFooter.scss";
import AOS from "aos";
import "aos/dist/aos.css";

import React,{useRef, useEffect, useState } from "react";

export default function MainFooter() {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    },[]);

    return (
        <div className="footer">
            Mickey Choi Group. All rights reserved. CHAIRMAN MICKEY CHOI
        </div>
    );
};