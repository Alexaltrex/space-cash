import React, {FC} from "react";
import style from './header.module.scss';
import logo from '../../assets/img/png/logo.png';
import {SvgIcon} from "../SvgIcon/SvgIcon";

export interface IHeader {
    setBurgerIsOpen: () => void
    isBurgerIsOpen: boolean
}

export interface ILink {
    text: string
    link: string
}

export const links: ILink[] = [
    {
        text: 'Tokenomics',
        link: 'tokenomics',
    },
    {
        text: 'Roadmap',
        link: 'roadmap',
    },
    {
        text: 'How to buy',
        link: 'how to buy',
    },
    {
        text: 'Whitepaper',
        link: 'whitepaper',
    },
];


export const Header: FC<IHeader> = ({setBurgerIsOpen, isBurgerIsOpen}) => {
    return (
        <header className={style.header}>
            <div className={style.innerWrapper}>

                <div className={style.leftBlock}>
                    <a className={style.logo} href="/">
                        <img src={logo} alt=""/>
                    </a>

                    <nav className={style.nav}>
                        {
                            links.map(
                                ({text, link}, index) => (
                                    <a className={style.link}
                                       key={index}
                                       href={`#${link}`}
                                    >
                                        {text}
                                    </a>
                                )
                            )
                        }
                    </nav>
                </div>

                <div className={style.rightBlock}>

                    <button className={style.burgerButton}
                            onClick={() => setBurgerIsOpen()}
                    >
                        {
                            isBurgerIsOpen
                                ? <SvgIcon icon='close'/>
                                : <SvgIcon icon='burger'/>
                        }
                    </button>

                    <button className={style.button}>
                        Your Dashboard
                    </button>
                </div>

            </div>

        </header>
    )
};