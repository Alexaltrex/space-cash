import React, {FC, ReactElement, useEffect, useRef, useState} from "react";
import style from './howToBuy.module.scss'
import {SvgIcon} from "../SvgIcon/SvgIcon";
import left_2 from '../../assets/img/png/objects/left_2.png';
import useIntersectionObserver from "@react-hook/intersection-observer";
import {time} from "../../consts/consts";
import clsx from "clsx";
import coin2 from '../../assets/img/gif/coin2.gif';
import coin3 from '../../assets/img/gif/coin3.gif';
import coin4 from '../../assets/img/gif/coin4.gif';
import coin5 from '../../assets/img/gif/coin5.gif';


interface iCard {
    icon: string
    step: string
    title: string
    text: ReactElement
}

const cards: iCard[] = [
    {
        icon: 'download',
        step: 'step 1',
        title: 'Install Metamask',
        text: <p className={style.text}>Go to metamask.io and install the internet browser extension. Follow the steps
            from their guide to get set up.'</p>,
    },
    {
        icon: 'group',
        step: 'step 2',
        title: 'Send BNB to Metamask',
        text: <p className={style.text}>Deposit BNB directly to your Metamask address using another exchange or
            wallet.</p>,
    },
    {
        icon: 'pancakeswap',
        step: 'step 3',
        title: 'Connect to Pancakeswap',
        text: <p className={style.text}>Go to <a
            href='https://pancakeswap.finance/swap?outputCurrency=0x8b772f35f7bd400bd9d35a0a18f4790b02fbd940'>https://pancakeswap.finance/swap?outputCurrency=0x8b772f35f7bd400bd9d35a0a18f4790b02fbd940</a> and
            find the “Connect” button to connect your Metamask wallet to PancakeSwap.</p>,
    },
    {
        icon: 'swap',
        step: 'step 4',
        title: 'Swap your BNB for $THRUST',
        text: <p className={style.text}>Now you can swap your BNB for $THRUST. Add the BNB amount, and PancakeSwap will
            calculate the correct $THRUST amount. Click the gear icon on the top right corner of the swap box and set
            your slippage to 12% ( 12-15% in times of high trading activity). Next, click on “Swap”- Metamask window
            will pop up. Click edit, advanced and set your gas number 10-20 times higher than what is there. Approve the
            transaction!</p>,
    },
    {
        icon: 'rocket',
        step: 'step 5',
        title: 'READY!',
        text: <p className={style.text}>Strap in and enjoy the ride! You are now part of the Thust movement.</p>,
    },
];

export const HowToBuy: FC = () => {
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
            }, 1 * time);
            setTimeout(() => {
                setIntersected_2(true);
            }, 2 * time);
        }
    }, [isIntersecting]);

    return (
        <section className={style.howToBuy}
                 id='how to buy'
                 ref={ref}
        >

            <div className={style.innerWrapper}>

                <h2 className={clsx({
                    [style.main_title]: true,
                    [style.main_title_intersected]: intersected,
                })}
                >
                    <span>How to buy</span>
                    <span>SPACECASH</span>
                </h2>

                <p className={clsx({
                    [style.subtitle]: true,
                    [style.subtitle_intersected]: intersected_1,
                })}
                >
                    Step by Step Guide
                </p>

                <div className={clsx({
                    [style.cards]: true,
                    [style.cards_intersected]: intersected_2,
                })}
                >

                    <img src={left_2} className={style.left_2}/>
                    <img src={coin2} className={style.coin2}/>
                    <img src={coin3} className={style.coin3}/>
                    <img src={coin4} className={style.coin4}/>
                    <img src={coin5} className={style.coin5}/>

                    {
                        cards.map(({step, text, title, icon}, index) => (
                            <div className={style.card} key={index}>
                                <div className={style.iconWrapper}>
                                    <SvgIcon icon={icon}/>
                                </div>
                                <div className={style.content}>
                                    <p className={style.step}>{step}</p>
                                    <p className={style.title}>{title}</p>
                                    {text}
                                </div>
                            </div>
                        ))
                    }
                </div>


            </div>

        </section>
    )
};