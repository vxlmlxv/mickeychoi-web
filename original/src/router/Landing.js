import "./Landing.scss";
import AOS from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import Slider from "react-slick";

import React,{useRef, useEffect, useState } from "react";

export default function Landing({setLocate}) {
    const landingPage = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 1500 });
        setLocate('');
    },[]);


    return (
        <div className="home-background" ref={landingPage}>
            <div className="frame">

                <main>
                    <section className="intro">
                        <div className="frame">
                            <div className="body" data-aos="fade-up" data-aos-delay="400">
                                <div className="left">
                                    <img src={process.env.PUBLIC_URL + '/main1.jpg'} alt="" className="" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="basic">
                        <div className="frame" data-aos="fade-up" data-aos-delay="400">
                            <iframe width="1183" height="665" src="https://www.youtube.com/embed/5Arv_c1DeuQ" title="트루카프 카프가드 크리에이티브 디렉터 미키최" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={true}></iframe>
                        </div>
                    </section>

                    <section className="basic">
                        <div className="frame" data-aos="fade-up" data-aos-delay="400">
                            <img src={process.env.PUBLIC_URL + '/resources/oremtimes.jpg'} alt="" className="" />
                        </div>
                    </section>

                    <section className="basic">
                        <div className="frame" data-aos="fade-up" data-aos-delay="400">
                            <iframe width="470" height="836" src="https://www.youtube.com/embed/7GEmQnhg77o" title="무료주짓수 별내주짓수 별내동주짓수 베림보로파이트 미키최" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={true}></iframe>
                        </div>
                    </section>


                </main>
            {/* <div data-aos="fade-up"  data-aos-delay="400">
                <LandingFooter />
            </div> */}
            </div>
        </div>
    );
};