import React, {FC, useState} from "react";
import style from './iconLink.module.scss'

interface IIconLink {
    href: string
    icon: string
    icon_hover: string
}

export const IconLink: FC<IIconLink> = ({href, icon, icon_hover}) => {
    const [hover, setHover] = useState(false);
    const onMouseEnterHandler = () => setHover(true);
    const onMouseLeaveHandler = () => setHover(false);

    return (
        <a className={style.iconLink}
           href={href}
           onMouseEnter={onMouseEnterHandler}
           onMouseLeave={onMouseLeaveHandler}
        >
            <img src={hover ? icon_hover : icon} alt=""/>
        </a>
    )
};