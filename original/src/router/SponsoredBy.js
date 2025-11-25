import "./SponsoredBy.scss";
import AOS from "aos";
import "aos/dist/aos.css";

import React,{useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

export default function SponsoredBy({setLocate}) {
    useEffect(() => {
        AOS.init({ duration: 1500 });
        setLocate('sponsoredby');
    },[]);

    return (
        <div className="sponsoredby-sub">
            <Helmet>
                <title>미키최 - Sponsored By</title>
            </Helmet>

            <div className="title" data-aos="fade-up" data-aos-delay="400">
                Sponsored by
            </div>
            <section>
                <div className="frame">
                    <img src={process.env.PUBLIC_URL + '/resources/미키최그룹_로고.jpg'} alt="" className="" />
                    <div className="logo" data-aos="fade-up" data-aos-delay="400">
                        <img src={process.env.PUBLIC_URL + '/resources/트루카프_로고.png'} style={{marginTop: '60px'}} alt="" className="" />
                    </div>
                    <div className="logo" data-aos="fade-up" data-aos-delay="400">
                        <img src={process.env.PUBLIC_URL + '/resources/베림보로파이트_로고.png'} alt="" className="" />
                    </div>
                    <div className="logo" data-aos="fade-up" data-aos-delay="400">
                        <img src={process.env.PUBLIC_URL + '/resources/루타리브레서브미션_로고.png'} alt="" className="" />
                    </div>
                </div>
            </section>
        </div>
    );
};