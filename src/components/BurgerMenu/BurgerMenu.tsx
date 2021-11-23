import React, {FC} from "react";
import clsx from "clsx";
import style from './burgerMenu.module.scss';
import {links} from "../Header/Header";
// import {Link} from "react-router-dom";
// import {links, logotype} from "../Header/Header";
// import mask from '../../assets/img/burger-mask.png'
// import {HashLink} from "react-router-hash-link";


export interface IBurgerMenu {
    isBurgerIsOpen: boolean
    onClickHandler: () => void
}

export const BurgerMenu: FC<IBurgerMenu> = ({isBurgerIsOpen, onClickHandler}) => {
    return (
        <div className={clsx({
            [style.burgerMenu]: true,
            [style.burgerMenu_open]: isBurgerIsOpen,
        })}>

            <div className={style.linksWrapper}>
                <div className={style.links}>
                    {
                        links.map(({link, text}, index) => (
                            <a key={index}
                               href={`#${link}`}
                               className={style.link}
                               onClick={onClickHandler}
                            >
                                {text}
                            </a>
                        ))
                    }
                </div>
            </div>


            <a href="#"
               className={style.button}
               onClick={onClickHandler}
            >
                Your Dashboard
            </a>


        </div>
    )
}