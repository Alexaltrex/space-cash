import React, {FC} from "react";
import style from './footer.module.scss';
import {links} from "../Header/Header";
import mask from '../../assets/img/png/footer-mask.png';
import {SvgIcon} from "../SvgIcon/SvgIcon";
import {IconLink} from "./IconLink/IconLink";
import icon_1 from '../../assets/img/png/icon_1.png';
import icon_1_hover from '../../assets/img/png/icon_1_hover.png';
import {icon_0, icon_0_hover, icon_2, icon_2_hover, icon_3, icon_3_hover} from "./IconLink/icons";

interface IIconLinks {
    icon: any
    icon_hover: any
    href: string
}

const iconLinks: IIconLinks[] = [
    {icon: icon_0, icon_hover: icon_0_hover, href: '#'},
    {icon: icon_1, icon_hover: icon_1_hover, href: '#'},
    {icon: icon_2, icon_hover: icon_2_hover, href: '#'},
    {icon: icon_3, icon_hover: icon_3_hover, href: '#'},
];

export const Footer: FC = () => {
    return (
        <footer className={style.footer}>
            <div className={style.mask}
                 style={{
                     backgroundImage: `url(${mask})`,
                     backgroundRepeat: 'repeat',
                 }}
            />

            <div className={style.topBlock}>
                <div className={style.innerWrapper}>

                    <div className={style.leftBlock}>
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

                        <div className={style.icons}>
                            {
                                iconLinks.map(({href, icon}, index) => (
                                    <IconLink key={index} {...iconLinks[index]} isPng={index === 1 ? true : false} />
                                ))
                            }


                        </div>
                    </div>

                    <div className={style.rightBlock}>

                        <a href='#'>
                            <SvgIcon icon="arrow-up"/>
                        </a>

                        <button className={style.firstButton}>
                            Buy $SPACECASH
                            <SvgIcon icon='arrow-up'/>
                        </button>

                        <button className={style.secondButton}>
                            Contact Us
                        </button>

                    </div>


                </div>
            </div>

            <div className={style.bottomBlock}>
                <div className={style.innerWrapper}>

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

                    <p className={style.copy}>Copyright Thrust 2021 © All rights Reserved.</p>

                </div>
            </div>
        </footer>
    )
}