import React, {FC, useEffect, useRef, useState} from "react";
import style from './tokenomics.module.scss'
import {SvgIcon} from "../SvgIcon/SvgIcon";
import chart from '../../assets/img/png/chart.png';
import useIntersectionObserver from "@react-hook/intersection-observer";
import {time} from "../../consts/consts";
import clsx from "clsx";

interface IItem {
    value: string
    text: string
}

const items: IItem[] = [
    {
        value: '5%',
        text: 'Distributed to Holders',
    },
    {
        value: '2%',
        text: 'Liquidity Pool',
    },
    {
        value: '5%',
        text: 'Marketing Wallet',
    },
    {
        value: '14-16%',
        text: 'Slippage',
    },
];

export const Tokenomics: FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const {isIntersecting} = useIntersectionObserver(
        ref,
        {
            threshold: 0.3
        }
    );
    const [intersected, setIntersected] = useState(false);
    const [intersected_1, setIntersected_1] = useState(false);

    useEffect(() => {
        if (isIntersecting) {
            setIntersected(true);
            setTimeout(() => {
                setIntersected_1(true);
            }, time);
        }
    }, [isIntersecting]);


    return (
        <div className={style.tokenomics}
             id='tokenomics'
             ref={ref}
        >
            <div className={style.innerWrapper}>

                <div className={clsx({
                        [style.itemsWrapper]: true,
                        [style.itemsWrapper_intersected]: intersected,
                    })}
                >
                    <h2 className={style.title}>Tokenomics</h2>

                    <div className={style.items}>
                        {
                            items.map(
                                ({value, text}, index) => (
                                    <div key={index} className={style.item}>
                                        <p className={style.value}>{value}</p>
                                        <p className={style.text}>{text}</p>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>

                <div className={clsx({
                    [style.buttons]: true,
                    [style.buttons_intersected]: intersected_1,
                })}
                >
                    <button>
                        <span>Buy $SPACECASH</span>
                        <SvgIcon icon="arrow-up"/>
                        <div>
                            Slippage 14-16%
                        </div>
                    </button>
                    <button>
                        <img src={chart} alt=""/>
                        <span>Your Dashboard</span>
                    </button>
                </div>
            </div>
        </div>
    )
}