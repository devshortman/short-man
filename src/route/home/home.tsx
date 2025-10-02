import React from 'react';
import Header from '../../component/header/header';
import "./style.css";
import banner from '../../assets/image/banner.svg'
import arrow from '../../assets/image/arrow.svg'
import Card from '../../component/short-card/short-card';

import user1 from '../../assets/image/user1.svg'
import user2 from '../../assets/image/user2.svg'
import user3 from '../../assets/image/user3.svg'
import user4 from '../../assets/image/user4.svg'
import user5 from '../../assets/image/user5.svg'
import avatar from '../../assets/image/avatar.svg'

import image1 from '../../assets/image/image1.svg'
import image2 from '../../assets/image/image2.svg'
import image3 from '../../assets/image/image3.svg'
import image4 from '../../assets/image/image4.svg'
import image5 from '../../assets/image/image5.svg'

import insta from '../../assets/image/insta.svg'
import youtube from '../../assets/image/youtube.svg'
import tiktok from '../../assets/image/tiktok.svg'
import Footer from '../../component/footer/footer';




type CardInterface = {
    avatar?: string;
    thumbnail?: string;
    source?: string;
}

const Home = () => {

    const data: CardInterface[] = [
        { avatar: user1, thumbnail: image1, source: insta },
        { avatar: user2, thumbnail: image2, source: youtube },
        { avatar: avatar, thumbnail: image3, source: tiktok },
        { avatar: user3, thumbnail: image4, source: insta },
        { avatar: user4, thumbnail: image5, source: insta },
        { avatar: user5, thumbnail: image1, source: insta },
        { avatar: user1, thumbnail: image1, source: insta },
        { avatar: user2, thumbnail: image2, source: youtube },
        { avatar: avatar, thumbnail: image3, source: tiktok },
        { avatar: user3, thumbnail: image4, source: insta },
        { avatar: user4, thumbnail: image5, source: insta },
        { avatar: user5, thumbnail: image1, source: insta },
    ]

    const sections = [
        { region: "한국" },
        { region: "해외" },
        { region: "중국" }
    ];

    return (
        <div id='home'>
            <Header />
            <div className='body'>
                {/* 베너는 이미지로 처리 */}
                <img src={banner} alt="banner" />

                {sections.map((section, idx) => (
                    <React.Fragment key={idx}>
                        <div className="c">
                            <div className="h">
                                <div>
                                    금주의 뜨는 <span>{section.region} 숏폼 트랜드</span>
                                </div>
                                <div>더보기 <span><img src={arrow} alt="arrow" /></span></div>
                            </div>
                            <div className='w'>
                                {data?.map((e: any, i: any) =>
                                    <Card avatar={e?.avatar} thumbnail={e?.thumbnail} source={e?.source} key={i}></Card>
                                )}
                            </div>
                        </div>
                        {idx < sections.length - 1 && <div className="line"></div>}
                    </React.Fragment>
                ))}

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;