import React, {FC, useState} from "react";
import style from './iconLink.module.scss';

interface IIconLink {
    href: string
    src: string
    src_hover: string
    text: string
}

export const IconLink: FC<IIconLink> = ({href, text, src, src_hover}) => {
    const [hover, setHover] = useState(false)

    return (
        <a href={href}
           className={style.iconLink}
           onMouseEnter={() => setHover(true)}
           onMouseLeave={() => setHover(false)}
        >
            <img src={hover ? src_hover : src} alt=""/>
            <p>{text}</p>
        </a>
    )
}