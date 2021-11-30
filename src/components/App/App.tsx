import React, {useState} from 'react';
import style from './app.module.scss';
import {Moon} from "../Moon/Moon";
import stars from '../../assets/img/png/stars.png';
import {Tokenomics} from "../Tokenomics/Tokenomics";
import {Header} from "../Header/Header";
import {BurgerMenu} from "../BurgerMenu/BurgerMenu";
import {Roadmap} from "../Roadmap/Roadmap";
import {HowToBuy} from "../HowToBuy/HowToBuy";
import {LastNews} from "../LastNews/LastNews";
import {Footer} from "../Footer/Footer";
import {FirstBlock} from "../FirstBlock/FirstBlock";
import throttle from "lodash/throttle";
import left_1 from '../../assets/img/png/objects/left_1.png';
import right_1 from '../../assets/img/png/objects/right_1.png';
import right_2 from '../../assets/img/png/objects/right_2.png';
import left_2 from '../../assets/img/png/objects/left_2.png';
import right_3 from '../../assets/img/png/objects/right_3.png';
import left_na_1 from '../../assets/img/png/objects/not-animated/left_na_1.png';
import right_na_1 from '../../assets/img/png/objects/not-animated/right_na_1.png';
import right_na_2 from '../../assets/img/png/objects/not-animated/right_na_2.png';
import left_na_2 from '../../assets/img/png/objects/not-animated/left_na_2.png';
import right_na_3 from '../../assets/img/png/objects/not-animated/right_na_3.png';
import left_na_3 from '../../assets/img/png/objects/not-animated/left_na_3.png';

import coin1 from '../../assets/img/gif/coin1.gif';
import coin2 from '../../assets/img/gif/coin2.gif';
import coin3 from '../../assets/img/gif/coin3.gif';
import coin4 from '../../assets/img/gif/coin4.gif';
import coin5 from '../../assets/img/gif/coin5.gif';
import ReactPlayer from "react-player";

const App = () => {
    const [isBurgerIsOpen, setBurgerIsOpen] = useState(false);
    const [deltaX, setDeltaX] = useState(0);
    const [deltaY, setDeltaY] = useState(0);

    const onMouseMoveHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const w = document.documentElement.clientWidth;
        const h = document.documentElement.clientHeight;
        const deltaX = Number(((e.clientX - 0.5 * w) / (0.5 * w)).toFixed(1))
        const deltaY = Number(((e.clientY - 0.5 * h) / (0.5 * h)).toFixed(1))
        setDeltaX(deltaX);
        setDeltaY(deltaY);
    };

    const onMouseMoveThrottle = throttle(onMouseMoveHandler, 100);

    return (
        <div className={style.app}
             onMouseMove={onMouseMoveThrottle}
             style={
                 isBurgerIsOpen
                     ? {
                         overflow: "hidden",
                         height: "100vh"
                     }
                     : {}
             }
        >

            <BurgerMenu isBurgerIsOpen={isBurgerIsOpen}
                        onClickHandler={() => setBurgerIsOpen(false)}
            />

            <div className={style.rocketDesktop}>
                <ReactPlayer
                    className={style.video}
                    url={process.env.REACT_APP_ROCKET_SRC}
                    width='100%'
                    height='100%'
                    playing={true}
                    loop={true}
                    muted={true}
                    playsinline={true}
                />
            </div>


            <div className={style.stars}
                 style={{
                     backgroundImage: `url(${stars})`,
                 }}
            />

            <div className={style.notAnimateObjects}>
                <img src={left_na_1} className={style.left_na_1} alt=''/>
                <img src={right_na_1} className={style.right_na_1} alt=''/>
                <img src={right_na_2} className={style.right_na_2} alt=''/>
                <img src={left_na_2} className={style.left_na_2} alt=''/>
                <img src={right_na_3} className={style.right_na_3} alt=''/>
                <img src={left_na_3} className={style.left_na_3} alt=''/>
            </div>

            <div className={style.animatedObjectsLower}>
                <div className={style.innerWrapper}
                     style={{
                         transform: `translate(${deltaX * 10}px, ${deltaY * 10}px)`,
                     }}
                >
                    {/*stone*/}
                    <img src={left_1} className={style.left_1} alt=''/>
                    <img src={right_1} className={style.right_1} alt=''/>
                    <img src={right_2} className={style.right_2} alt=''/>
                    <img src={left_2} className={style.left_2} alt=''/>
                    <img src={right_3} className={style.right_3} alt=''/>
                    <img src={right_1} className={style.left_3} alt=''/>

                    {/*coin*/}

                    {/*left*/}
                    <img src={coin3} className={style.coin_left_1} alt=''/>
                    <img src={coin2} className={style.coin_left_2} alt=''/>
                    <img src={coin4} className={style.coin_left_3} alt=''/>
                    <img src={coin5} className={style.coin_left_4} alt=''/>
                    <img src={coin3} className={style.coin_left_5} alt=''/>
                    <img src={coin4} className={style.coin_left_6} alt=''/>
                    <img src={coin5} className={style.coin_left_7} alt=''/>

                    {/*right*/}
                    <img src={coin4} className={style.coin_right_1} alt=''/>
                    <img src={coin5} className={style.coin_right_2} alt=''/>
                    <img src={coin2} className={style.coin_right_3} alt=''/>
                    <img src={coin5} className={style.coin_right_4} alt=''/>
                    <img src={coin3} className={style.coin_right_5} alt=''/>
                    <img src={coin4} className={style.coin_right_6} alt=''/>
                    <img src={coin4} className={style.coin_right_7} alt=''/>
                    <img src={coin2} className={style.coin_right_8} alt=''/>
                    <img src={coin1} className={style.coin_right_9} alt=''/>
                </div>

            </div>

            <img src={coin1} className={style.animatedObjectsUpper} alt=''/>

            <Header isBurgerIsOpen={isBurgerIsOpen}
                    setBurgerIsOpen={() => setBurgerIsOpen(!isBurgerIsOpen)}
            />

            <FirstBlock/>
            <Moon/>
            <Tokenomics/>
            <Roadmap/>
            <HowToBuy/>
            <LastNews/>
            <Footer/>

        </div>
    );
};

export default App;
