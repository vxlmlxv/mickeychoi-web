import "./Worldwide.scss";
import AOS from "aos";
import "aos/dist/aos.css";

import React,{useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Worldwide({setLocate}) {
    useEffect(() => {
        AOS.init({ duration: 1500 });
        setLocate('worldwide');
    },[]);

    return (
        <div className="worldwide-sub">
            <Helmet>
                <title>미키최 - Worldwide</title>
            </Helmet>

            <div className="title" data-aos="fade-up" data-aos-delay="400">
                Worldwide
                <img src='/resources/globe.png' />
            </div>
            <section>
                <div className="frame" data-aos="fade-up" data-aos-delay="400">
                    <iframe width="1183" height="665" src="https://www.youtube.com/embed/RKzEMB-VNqY" title="무료주짓수 별내주짓수 별내동주짓수 베림보로파이트 미키최" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={true}></iframe>
                </div>
            </section>
            <section>
                <div className="frame" data-aos="fade-up" data-aos-delay="400">
                    <iframe width="1198" height="716" src="https://www.youtube.com/embed/K3z1sGKq8GQ" title="무료주짓수 별내주짓수 별내동주짓수 베림보로파이트 미키최" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={true}></iframe>
                </div>
            </section>
            <section>
                <div className="frame" data-aos="fade-up" data-aos-delay="400">
                    <iframe width="1198" height="716" src="https://www.youtube.com/embed/Co2LECIRFUY" title="무료주짓수 별내주짓수 별내동주짓수 베림보로파이트 미키최" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={true}></iframe>
                </div>
            </section>
            <section>
                <div className="frame" data-aos="fade-up" data-aos-delay="400">
                    <iframe width="1183" height="665" src="https://www.youtube.com/embed/2KS0OdkDNEo" title="대한루타리브레협회 회장 미키최/무료주짓수/별내주짓수/별내동주짓수" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={true}></iframe>
                </div>
            </section>
            <section>
                <div className="frame" data-aos="fade-up" data-aos-delay="400">
                    <Link to="https://blog.naver.com/1compression/221120041729" target="_blank"><img src={process.env.PUBLIC_URL + '/resources/블로그1.png'} alt="" className="" /></Link>
                </div>
            </section>
            <section>
                <div className="frame" data-aos="fade-up" data-aos-delay="400">
                    <Link to="https://blog.naver.com/1compression/221175946844" target="_blank"><img src={process.env.PUBLIC_URL + '/resources/블로그2.png'} alt="" className="" /></Link>
                </div>
            </section>
        </div>
    );
};