import React, {FC, useEffect, useRef, useState} from "react";
import style from './moon.module.scss'
import imgPlanet from '../../assets/img/png/moon-planet.png';
import right_1 from '../../assets/img/png/objects/right_1.png';
import useIntersectionObserver from "@react-hook/intersection-observer";
import {time} from "../../consts/consts";
import clsx from "clsx";
import coin1 from '../../assets/img/gif/coin1.gif';
import coin2 from '../../assets/img/gif/coin2.gif';

interface ICard {
    title: string
    text: string
}

const cards: ICard[] = [
    {
        title: 'Meme by the looks but with an actual use-case',
        text: 'Thrust developers are focused on delivering the products on the roadmap and constantly improve the token ecosystem.',
    },
    {
        title: 'USE-CASE',
        text: 'By holding $SPACECASH, you instantly receive other tokens in your wallet. We begin by rewarding users with BUSD and rotate to other BEP-20 tokens by community vote.',
    },
    {
        title: 'Vision',
        text: 'We have a roadmap filled with upcoming products. Ranging from social media tools to interactive dashboards, our products are meant to boost the community numbers.\n',
    },
    {
        title: 'Fair Launch',
        text: 'SPACECASH will launch fairly with no presale. The liquidity will be added by the creators and locked via 3rd party. All you need to worry about is what token you want to farm next.',
    },
];


export const Moon: FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const {isIntersecting} = useIntersectionObserver(
        ref,
        {
            threshold: 0.3
        }
    );
    const [intersected, setIntersected] = useState(false);
    const [intersected_1, setIntersected_1] = useState(false);
    const [intersected_2, setIntersected_2] = useState(false);
    const [intersected_3, setIntersected_3] = useState(false);
    const [intersected_4, setIntersected_4] = useState(false);
    const arrayIntersected = [
        intersected_1,
        intersected_2,
        intersected_3,
        intersected_4,
    ];
    useEffect(() => {
        let id: any;
        if (isIntersecting) {
            setIntersected(true);
            setTimeout(() => {
                setIntersected_1(true);
            }, 1 * time);
            setTimeout(() => {
                setIntersected_2(true);
            }, 2 * time);
            setTimeout(() => {
                setIntersected_3(true);
            }, 3 * time);
            setTimeout(() => {
                setIntersected_4(true);
            }, 4 * time);
        }
    }, [isIntersecting]);

    return (
        <div className={style.moon} ref={ref}>
            <div className={style.innerWrapper}>
                <div className={style.cards}>
                    {
                        cards.map(
                            ({title, text}, index) => (
                                <div className={clsx({
                                    [style.card]: true,
                                    [style.card_intersected]: arrayIntersected[index],
                                })}
                                     key={index}
                                >
                                    <p className={style.title}>{title}</p>
                                    <p className={style.text}>{text}</p>
                                </div>
                            )
                        )
                    }
                </div>
                <img src={imgPlanet} className={style.imgPlanet}/>
            </div>

            <img src={right_1} className={style.right_1}/>
            <img src={coin1} className={style.coin1}/>
            <img src={coin2} className={style.coin2}/>
        </div>
    )
}