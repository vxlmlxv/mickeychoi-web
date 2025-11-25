import "./ABIMJJ.scss";
import AOS from "aos";
import "aos/dist/aos.css";

import React,{useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet";


export default function ABIMJJ({setLocate}) {
    useEffect(() => {
        AOS.init({ duration: 1500 });
        setLocate('ABIMJJ');
    },[]);

    return (
        <div className="ABIMJJ-sub">
            <Helmet>
                <title>미키최 - 국제주짓수지도자협회</title>
                <meta name="description" content="브라질 국제주짓수지도자협회 레드벨트 10단 3인이 인증하는 한국회장 미키최" />
            </Helmet>

            <div className="title" data-aos="fade-up" data-aos-delay="400">
                국제주짓수지도자협회
                <img style={{width: '40px', marginLeft: '15px',marginRight: '5px'}} src='/resources/dis.png' />
            </div>
            <section>
                <div className="frame" data-aos="fade-up" data-aos-delay="400">
                    <img src={process.env.PUBLIC_URL + '/resources/abimjj_로고.jpg'} alt="" className="" />
                </div>
            </section>

            <section>
                <div className="frame" data-aos="fade-up" data-aos-delay="400">
                    <img src={process.env.PUBLIC_URL + '/resources/레드벨트3명.jpg'} alt="" className="" />
                </div>
            </section>

            <section>
                <div className="frame" data-aos="fade-up" data-aos-delay="400">
                    <img src={process.env.PUBLIC_URL + '/resources/레드벨트클로즈업.jpg'} alt="" className="" />
                </div>
            </section>

            <section>
                <div className="frame" data-aos="fade-up" data-aos-delay="400">
                    <p>
                        브라질 국제주짓수지도자협회 레드벨트 10단 3인이 인증하는 한국회장 미키최
                    </p>
                </div>
            </section>


            <section>
                <div className="frame" data-aos="fade-up" data-aos-delay="400">
                    <iframe width="470" height="836" src="https://www.youtube.com/embed/_vf-EDh6uh0" title="미키최 주짓수도복코리아 무료주짓수 별내주짓수 갈매주짓수 베림보로파이트 스노우골드요가매트" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={true}></iframe>
                </div>
            </section>

            <section>
                <div className="frame" data-aos="fade-up" data-aos-delay="400">
                    <iframe width="1183" height="665" src="https://www.youtube.com/embed/D-RpJwj-3KQ" title="ABIMJJ Reconhecimento e Graduação Jiu Jitsu 2022" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={true}></iframe>
                </div>
            </section>
        </div>
    );
};