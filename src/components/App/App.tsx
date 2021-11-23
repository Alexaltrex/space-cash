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
        console.log(deltaY);
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

            <div className={style.stars}
                 style={{
                     backgroundImage: `url(${stars})`,
                 }}
            />

            <div className={style.notAnimateObjects}>
                <img src={left_na_1} className={style.left_na_1}/>
                <img src={right_na_1} className={style.right_na_1}/>
                <img src={right_na_2} className={style.right_na_2}/>
                <img src={left_na_2} className={style.left_na_2}/>
                <img src={right_na_3} className={style.right_na_3}/>
                <img src={left_na_3} className={style.left_na_3}/>
            </div>

            <div className={style.animateObjects}

            >
                <div className={style.innerWrapper}
                     style={{
                         transform: `translate(${deltaX * 10}px, ${deltaY * 10}px)`,
                     }}
                >
                    <img src={left_1} className={style.left_1}/>
                    <img src={right_1} className={style.right_1}/>
                    <img src={right_2} className={style.right_2}/>
                    <img src={left_2} className={style.left_2}/>
                    <img src={right_3} className={style.right_3}/>
                    <img src={right_1} className={style.left_3}/>
                </div>

            </div>

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
