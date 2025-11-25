import "./LegendaryHistory.scss";
import AOS from "aos";
import "aos/dist/aos.css";

import React,{useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

export default function LegendaryHistory({setLocate}) {
    useEffect(() => {
        AOS.init({ duration: 1500 });
        setLocate('legendaryhistory');
    },[]);

    return (
        <div className="legendaryhistory-sub">
            <Helmet>
                <title>미키최 - Legendary History</title>
            </Helmet>

            <div className="title" data-aos="fade-up" data-aos-delay="400">
                Legendary History
                <img style={{width: '40px', marginLeft: '15px',marginRight: '5px'}} src='/resources/pngtree-old-paper-scroll-and-parchment-banner-vector-for-historical-or-religious-png-image_13784981.png' />
            </div>
            <section>
                <div className="frame" data-aos="fade-up" data-aos-delay="400">
                    <img src={process.env.PUBLIC_URL + '/resources/Legendary_History페이지_사진1.jpg'} alt="" className="" />
                </div>
            </section>
            <section>
                <div className="frame" data-aos="fade-up" data-aos-delay="400">
                    <img src={process.env.PUBLIC_URL + '/resources/Legendary_History페이지_사진2.jpg'} alt="" className="" />
                </div>
            </section>
            <section>
                <div className="frame" data-aos="fade-up" data-aos-delay="400">
                    <img src={process.env.PUBLIC_URL + '/resources/대표님사진.jpg'} alt="" className="" />
                </div>
            </section>
            <section>
                <div className="frame" data-aos="fade-up" data-aos-delay="400">
                    <img src={process.env.PUBLIC_URL + '/resources/Legendary_History페이지_사진3.jpg'} alt="" className="" />
                </div>
            </section>
        </div>
    );
};