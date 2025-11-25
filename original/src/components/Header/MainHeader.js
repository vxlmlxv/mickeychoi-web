import React, { useState, useEffect, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './MainHeader.scss';

export const MainHeader = ({ locate }) => {
    const [show, setShow] = useState(false);
    const [hambergerMenuOpen, setHambergerMenuOpen] = useState(false);
    const [isClicked, setIsClicked] = useState(0);
    const [prevLocate, setPrevLocate] = useState('');

    const hambergerMenuOpenClick = (event) => {
        setHambergerMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        if (show) {
            setShow(false);
        }
    }, [isClicked]);

    useEffect(() => {
        if (prevLocate !== '') {
            const prev = document.querySelector(`li.${prevLocate}`);
            prev?.classList.remove('active');
            const prev_mobile = document.querySelector(`li.${prevLocate}-mobile`);
            prev_mobile?.classList.remove('active');
        }

        if (locate !== '') {
            const current = document.querySelector(`li.${locate}`);
            current?.classList.add('active');
            const current_mobile = document.querySelector(`li.${locate}-mobile`);
            current_mobile?.classList.add('active');
        }
        setPrevLocate(locate);
    }, [locate]);

    useEffect(() => {}, [show]);

    const handleClick = (event) => {
        if (event.target.tagName !== 'A') {
            setIsClicked((prev) => prev + 1);
        }
    };

    useEffect(() => {
        AOS.init({ duration: 1500 });

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <>
            <header>
                <h1 style={{ margin: '0' }} data-aos="fade-right">
                    <Link to="/">
                        <img
                            src={process.env.PUBLIC_URL + '/resources/logoC.png'}
                            style={{ paddingLeft: '5px' }}
                            alt="mickeychoi-logo"
                        />
                    </Link>
                </h1>
                <nav data-aos="fade-down">
                    <ul>
                        <li className="mickeychoi" onClick={() => setShow(false)}>
                            <Link to="/mickeychoi">미키최</Link>
                        </li>
                        <li className="legendaryhistory" onClick={() => setShow(false)}>
                            <Link to="/legendaryhistory">Legendary History</Link>
                        </li>
                        <li className="ABIMJJ" onClick={() => setShow(false)}>
                            <Link to="/ABIMJJ">국제주짓수지도자협회</Link>
                        </li>
                        <li className="worldwide" onClick={() => setShow(false)}>
                            <Link to="/worldwide">Worldwide</Link>
                        </li>
                        <li onClick={() => setShow(false)}>
                            <Link to="https://smartstore.naver.com/truecalf" target="_blank">
                                Store
                            </Link>
                        </li>

                        <li className="jiujitsu" onClick={() => setShow((prev) => !prev)}>
                            <Link>미키최무료주짓수 &#9662;</Link>
                            {show && (
                                <div className={`sub-menu-frame`}>
                                    <ul>
                                        <li>
                                            <Link to="https://naver.me/FhUOaScp" target="_blank">
                                                고려대학교
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="https://m.place.naver.com/place/887437471/home?entry=pll"
                                                target="_blank"
                                            >
                                                별내역
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li className="sponsoredby" onClick={() => setShow(false)}>
                            <Link to="/sponsoredby">Sponsored by</Link>
                        </li>
                    </ul>
                </nav>

                <div className="right-frame" data-aos="fade-left">
                    <div className="sns-icon" onClick={() => setShow(false)}>
                        <Link className="img-container" to="https://www.instagram.com/berimbolo_fight" target="_blank">
                            <img
                                src={process.env.PUBLIC_URL + '/resources/Instagram-logo-roundet.png'}
                                alt="Instagram"
                            />
                            <div className="keyword">Instagram</div>
                        </Link>
                        <Link className="img-container" to="https://blog.naver.com/linebreakau" target="_blank">
                            <img
                                src={process.env.PUBLIC_URL + '/resources/naver-blog-logo-B1AC84614D-seeklogo.com.png'}
                                alt="Blog"
                            />
                            <div className="keyword">Blog</div>
                        </Link>
                        <Link className="img-container" to="https://www.youtube.com/@linebreakorea" target="_blank">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    '/resources/png-clipart-youtube-play-button-computer-icons-youtube-youtube-logo-angle-rectangle-thumbnail.png'
                                }
                                alt="Youtube"
                            />
                            <div className="keyword">Youtube</div>
                        </Link>
                        <Link className="img-container" to="https://www.facebook.com/linebreak1" target="_blank">
                            <img src={process.env.PUBLIC_URL + '/resources/FaceB_Logo_PNG.png'} alt="Facebook" />
                            <div className="keyword">Facebook</div>
                        </Link>
                    </div>
                </div>

                {/* 반응형 메뉴 */}

                <div className={`mobile-menu`}>
                    <Link to="https://smartstore.naver.com/truecalf" target="_blank">
                        <img src={process.env.PUBLIC_URL + '/resources/SHOP.png'} alt="shop" />
                    </Link>
                    <img
                        onClick={hambergerMenuOpenClick}
                        src={process.env.PUBLIC_URL + '/resources/ICON.png'}
                        alt="menu"
                    />
                </div>
                <div className={`mobile-menu-list ${hambergerMenuOpen ? ' active' : ''}`}>
                    {/* <div className='bg' onClick={hambergerMenuOpenClick}></div> */}
                    <div className="mobile-list-frame">
                        <div className="mobile-list-inner">
                            <div className="mobile-list-top">
                                <img
                                    style={{ height: '70px', marginRight: 'auto', margin: 'auto' }}
                                    src={process.env.PUBLIC_URL + '/resources/logoC.png'}
                                    alt="mickeychoi-logo"
                                />
                                <img
                                    onClick={hambergerMenuOpenClick}
                                    style={{ cursor: 'pointer', marginRight: '15px' }}
                                    src={process.env.PUBLIC_URL + '/images/x-white.svg'}
                                    alt="close-menu"
                                />
                            </div>

                            <div className="mobile-list-ul">
                                <ul>
                                    <li
                                        className="mickeychoi-mobile"
                                        onClick={() => {
                                            setShow(false);
                                            setHambergerMenuOpen(false);
                                        }}
                                    >
                                        <Link to="/mickeychoi">
                                            미키최
                                            <img
                                                style={{ width: '40px', marginLeft: '15px', marginRight: '5px' }}
                                                src="/resources/미키최_메뉴아이콘_1.png"
                                            />
                                            <img style={{ width: '46px' }} src="/resources/ICON.png" />
                                        </Link>
                                    </li>
                                    <li
                                        className="legendaryhistory-mobile"
                                        onClick={() => {
                                            setShow(false);
                                            setHambergerMenuOpen(false);
                                        }}
                                    >
                                        <Link to="/legendaryhistory">
                                            Legendary History
                                            <img
                                                style={{ width: '40px', marginLeft: '15px' }}
                                                src="/resources/pngtree-old-paper-scroll-and-parchment-banner-vector-for-historical-or-religious-png-image_13784981.png"
                                            />
                                        </Link>
                                    </li>
                                    <li
                                        className="ABIMJJ-mobile"
                                        onClick={() => {
                                            setShow(false);
                                            setHambergerMenuOpen(false);
                                        }}
                                    >
                                        <Link to="/ABIMJJ">
                                            국제주짓수지도자협회
                                            <img
                                                style={{ width: '40px', marginLeft: '15px' }}
                                                src="/resources/dis.png"
                                            />
                                        </Link>
                                    </li>
                                    <li
                                        className="worldwide-mobile"
                                        onClick={() => {
                                            setShow(false);
                                            setHambergerMenuOpen(false);
                                        }}
                                    >
                                        <Link to="/worldwide">
                                            Worldwide
                                            <img
                                                style={{ width: '40px', marginLeft: '15px' }}
                                                src="/resources/globe.png"
                                            />
                                        </Link>
                                    </li>
                                    <li
                                        onClick={() => {
                                            setShow(false);
                                            setHambergerMenuOpen(false);
                                        }}
                                    >
                                        <Link to="https://m.smartstore.naver.com/truecalf" target="_blank">
                                            Store
                                            <img
                                                style={{ width: '40px', marginLeft: '15px' }}
                                                src="/resources/naver.png"
                                            />
                                        </Link>
                                    </li>

                                    <li className="jiujitsu-mobile" onClick={() => setShow((prev) => !prev)}>
                                        <Link>미키최무료주짓수 &#9662;</Link>
                                    </li>
                                    {show && (
                                        <ul style={{ paddingTop: '5px', paddingBottom: '5px' }}>
                                            <li
                                                onClick={() => {
                                                    setShow(false);
                                                    setHambergerMenuOpen(false);
                                                }}
                                            >
                                                <Link
                                                    to="https://naver.me/FhUOaScp"
                                                    target="_blank"
                                                    style={{ paddingLeft: '20px' }}
                                                >
                                                    고려대학교
                                                    <img
                                                        style={{ width: '40px', marginLeft: '15px' }}
                                                        src="/resources/png-transparent-tiger-emojipedia-iphone-sticker-lion-face-face-animals-cat-like-mammal.png"
                                                    />
                                                </Link>
                                            </li>
                                            <li
                                                onClick={() => {
                                                    setShow(false);
                                                    setHambergerMenuOpen(false);
                                                }}
                                            >
                                                <Link
                                                    to="https://m.place.naver.com/place/887437471/home?entry=pll"
                                                    target="_blank"
                                                    style={{ paddingLeft: '20px' }}
                                                >
                                                    별내역
                                                    <img
                                                        style={{ width: '40px', marginLeft: '15px' }}
                                                        src="/resources/pngtree-yellow-star-3d-icon-png-image_6511591.png"
                                                    />
                                                </Link>
                                            </li>
                                        </ul>
                                    )}

                                    <li
                                        className="sponsoredby-mobile"
                                        onClick={() => {
                                            setShow(false);
                                            setHambergerMenuOpen(false);
                                        }}
                                    >
                                        <Link to="/sponsoredby">Sponsored by</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mobile-bottom">
                                <div className="sns-icon">
                                    <Link
                                        className="img-container"
                                        to="https://www.instagram.com/berimbolo_fight"
                                        target="_blank"
                                    >
                                        <img
                                            src={process.env.PUBLIC_URL + '/resources/Instagram-logo-roundet.png'}
                                            alt="Instagram"
                                        />
                                        <div className="keyword">Instagram</div>
                                    </Link>
                                    <Link
                                        className="img-container"
                                        to="https://blog.naver.com/linebreakau"
                                        target="_blank"
                                    >
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                '/resources/naver-blog-logo-B1AC84614D-seeklogo.com.png'
                                            }
                                            alt="Blog"
                                        />
                                        <div className="keyword">Blog</div>
                                    </Link>
                                    <Link
                                        className="img-container"
                                        to="https://www.youtube.com/@linebreakorea"
                                        target="_blank"
                                    >
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                '/resources/png-clipart-youtube-play-button-computer-icons-youtube-youtube-logo-angle-rectangle-thumbnail.png'
                                            }
                                            alt="Youtube"
                                        />
                                        <div className="keyword">Youtube</div>
                                    </Link>
                                    <Link
                                        className="img-container"
                                        to="https://www.facebook.com/linebreak1"
                                        target="_blank"
                                    >
                                        <img
                                            src={process.env.PUBLIC_URL + '/resources/FaceB_Logo_PNG.png'}
                                            alt="Facebook"
                                        />
                                        <div className="keyword">Facebook</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};
