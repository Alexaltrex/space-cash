import React, {useEffect, useRef, useState} from "react";
import style from './firstBlock.module.scss';
import {SvgIcon} from "../SvgIcon/SvgIcon";
import icon_0 from '../../assets/img/png/icon_0.png';
import icon_1 from '../../assets/img/png/icon_1.png';
import icon_2 from '../../assets/img/png/icon_2.png';
import icon_3 from '../../assets/img/png/icon_3.png';
import icon_0_white from '../../assets/img/png/icon_0_white.png';
import icon_1_white from '../../assets/img/png/icon_1_white.png';
import icon_2_white from '../../assets/img/png/icon_2_white.png';
import icon_3_white from '../../assets/img/png/icon_3_white.png';
import {IconLink} from "./IconLink/IconLink";
import mouse from '../../assets/img/png/mouse.png';
import useIntersectionObserver from "@react-hook/intersection-observer";
import clsx from "clsx";
import {bubble, time} from "../../consts/consts";

interface IIconLinks {
    src: string
    src_hover: string
    href: string
    text: string
}

const iconLinks: IIconLinks[] = [
    {src: icon_0, src_hover: icon_0_white, href: '#', text: 'PancakeSwap'},
    {src: icon_1, src_hover: icon_1_white, href: '#', text: 'Dextools'},
    {src: icon_2, src_hover: icon_2_white, href: '#', text: 'Telegram'},
    {src: icon_3, src_hover: icon_3_white, href: '#', text: 'Docs'},
];

export const FirstBlock = () => {
    const ref = useRef<HTMLDivElement>(null);
    const {isIntersecting} = useIntersectionObserver(
        ref,
        {
            threshold: 1
        }
    );
    const [intersected, setIntersected] = useState(false);
    const [intersected_1, setIntersected_1] = useState(false);
    const [intersected_2, setIntersected_2] = useState(false);
    const [intersected_3, setIntersected_3] = useState(false);

    useEffect(() => {
        let id: any;
        if (isIntersecting) {
            setIntersected(true);
            setTimeout(() => {
                setIntersected_1(true);
            }, time);
            setTimeout(() => {
                setIntersected_2(true);
            }, 2 * time);
            setTimeout(() => {
                setIntersected_3(true);
            }, 3 * time);
        }
    }, [isIntersecting]);

    return (
        <section className={style.firstBlock} ref={ref}>

            <div className={style.mask}>
                <div/>
                <div/>
            </div>

            <div className={style.innerWrapper}>
                <h1 className={clsx({
                    [style.title]: true,
                    [style.title_intersected]: intersected,
                })}
                >
                    <span>Lorem ipsum dolor sit amet, consectetur</span>
                    <span> adipiscing elit sed </span>
                </h1>

                <p className={clsx({
                    [style.text]: true,
                    [style.text_intersected]: intersected_1,
                })}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </p>

                <div className={clsx({
                    [style.buttons]: true,
                    [style.buttons_intersected]: intersected_2,
                })}
                >
                    <button>
                        <span>Buy $SPACECASH</span>
                        <SvgIcon icon="arrow-up"/>
                    </button>
                    <button>
                        <span>View Whitepaper</span>
                    </button>
                </div>

                <div className={clsx({
                    [style.bottom]: true,
                    [style.bottom_intersected]: intersected_3,
                })}
                >
                    <div className={style.left}>
                        {
                            iconLinks.map((iconLink, index) => (
                                <IconLink key={index} {...iconLink}/>
                            ))
                        }
                    </div>
                    <a className={style.right}
                       href="#tokenomics">
                        <p>Scroll down</p>
                        <img src={mouse} alt=""/>
                    </a>
                </div>
            </div>
        </section>
    )
};