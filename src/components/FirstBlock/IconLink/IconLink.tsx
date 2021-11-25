import React, {FC} from "react";
import style from './iconLink.module.scss';

interface IIconLink {
    href: string
    src: any
    text: string
    isPng?: boolean
}

export const IconLink: FC<IIconLink> = ({href, text, src, isPng = false}) => {
    return (
        <a href={href}
           className={style.iconLink}
        >
            {
                isPng
                    ? <img src={src} alt=""/>
                    : src
            }
            <p>{text}</p>
        </a>
    )
}