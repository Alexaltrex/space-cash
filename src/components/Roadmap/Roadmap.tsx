import React, {FC, useEffect, useRef, useState} from "react";
import style from './roadmap.module.scss'
import {SvgIcon} from "../SvgIcon/SvgIcon";
import men from '../../assets/img/png/men.png';
import './anim.css'
import clsx from "clsx";
import right_2 from '../../assets/img/png/objects/right_2.png'
import useIntersectionObserver from "@react-hook/intersection-observer";
import {time} from "../../consts/consts";
import coin3 from '../../assets/img/gif/coin3.gif';
import coin4 from '../../assets/img/gif/coin4.gif';




interface IItem {
    text: string
    checked: boolean
}

interface ICard {
    title: string
    number: string
    items: IItem[]
}

const cards: ICard[] = [
    {
        title: 'Development',
        number: '01',
        items: [
            { text: 'DASHBOARD', checked: true },
            { text: 'GOVERNANCE ZONE', checked: true },
            { text: 'TWEET-TO-BURN BOT', checked: false },
            { text: 'REWARD TRACKER (APP)', checked: false },
            { text: 'THRUST2', checked: false },
        ],
    },
    {
        title: 'SOCIAL',
        number: '02',
        items: [
            { text: 'SOCIAL LISTINGS', checked: true },
            { text: 'LIVE BANNERS', checked: true },
            { text: 'MARKETING CAMPAIGNS', checked: true },
            { text: 'INFLUENCER ONBOARDING', checked: false },
            { text: 'INCENTIVISED MARKETING', checked: false },
        ]
    },
    {
        title: 'HOLDERS',
        number: '03',
        items: [
            { text: '2500 HOLDERS', checked: true },
            { text: '5000 HOLDERS', checked: true },
            { text: '10000 HOLDERS', checked: true },
            { text: '25000 HOLDERS', checked: false },
            { text: '50000 HOLDERS', checked: false },
        ]
    },
];
export const Roadmap: FC = () => {
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


    useEffect(() => {
        if (isIntersecting) {
            setIntersected(true);
            setTimeout(() => {
                setIntersected_1(true);
            }, time);
            setTimeout(() => {
                setIntersected_2(true);
            }, 2 * time);
        }
    }, [isIntersecting]);



    return (
        <section className={style.roadmap}
                 id='roadmap'
                 ref={ref}
        >

            <img src={right_2} className={style.right_2}/>
            <img src={coin3} className={style.coin1}/>
            <img src={coin4} className={style.coin2}/>

            <div className={style.innerWrapper}>

                <img src={men} className={clsx(style.men, 'anim')}/>

                <div className={style.firstBlock}>
                    <h2 className={clsx({
                        [style.title]: true,
                        [style.title_intersected]: intersected,
                    })}
                    >
                        Roadmap
                    </h2>

                    <p className={clsx({
                        [style.text]: true,
                        [style.text_intersected]: intersected_1,
                    })}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore aliqua.
                    </p>
                </div>

                <div className={clsx({
                    [style.secondBlock]: true,
                    [style.secondBlock_intersected]: intersected_2,
                })}
                >
                    <img src={men} className={clsx(style.men, 'anim')}/>
                    {
                        cards.map(({title, number, items}, index) => (
                            <div className={style.card} key={index}>
                                <div className={style.cardHeader}>
                                    <p className={style.title}>{title}</p>
                                    <p className={style.number}>{number}</p>
                                </div>
                                <div className={style.items}>
                                    {
                                        items.map(({text, checked}, index) => (
                                            <div className={style.item} key={index}>
                                               <SvgIcon icon={checked ? 'check' : 'timer'}/>
                                               <p className={style.text}
                                                  style={{
                                                      color: checked ? '#FFF' : '#8F8F8F'
                                                  }}
                                               >
                                                   {text}
                                               </p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}