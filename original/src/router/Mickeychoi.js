import './Mickeychoi.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

import React, { useRef, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

export default function Mickeychoi({ setLocate }) {
    useEffect(() => {
        AOS.init({ duration: 1500 });
        setLocate('mickeychoi');
    }, []);

    return (
        <div className="mickeychoi-sub">
            <Helmet>
                <title>미키최 - 그룹 소개</title>
            </Helmet>

            <div className="title" data-aos="fade-up" data-aos-delay="400">
                미키최
                <img
                    style={{ width: '40px', marginLeft: '15px', marginRight: '5px' }}
                    src="/resources/미키최_메뉴아이콘_1.png"
                />
                <img style={{ width: '46px', marginLeft: '0' }} src="/resources/ICON.png" />
            </div>
            <section>
                <div className="frame" data-aos="fade-up" data-aos-delay="400">
                    <img src={process.env.PUBLIC_URL + '/resources/미키최페이지_사진1.jpeg'} alt="" className="" />
                    <p>
                        미키최 그룹은 2001년 3월 16일 미국 유타주에서 창사 이래 글로벌 프런티어 정신과 정도경영을
                        바탕으로 좋은 기업집단의 모습을 가꿔왔다고 자부합니다.
                        <br />
                        <br />
                        그리고 앞으로도 지금까지처럼 외부환경에 흔들리지 않고 꿋꿋하게 제 갈 길을 가겠습니다.
                    </p>
                </div>
            </section>
            <section>
                <div className="frame" data-aos="fade-up" data-aos-delay="400">
                    <img src={process.env.PUBLIC_URL + '/resources/미키최페이지_사진2.jpg'} alt="" className="" />
                    <ul>
                        <li>- 국내유일 미국 IBJJF 전미 주짓수 블랙벨트 챔피언</li>
                        <li>- 국내유일 브라질 주짓수 블랙벨트 5단 한국 최고단</li>
                        <li>- 브라질 주짓수 레드벨트 10단 힐튼레옹의 직계 블랙벨트</li>
                        <li>- 일본 타니주짓수코리아 엑셀러레이터 / 헤드마스터</li>
                        <li>- ABIMJJ 국제 브라질 주짓수 지도자 협회 한국회장</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
