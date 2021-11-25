import React, {FC, useState} from "react";
import style from './iconLink.module.scss'

interface IIconLink {
    href: string
    icon: any
    icon_hover: any
    isPng?: boolean
}

export const IconLink: FC<IIconLink> = ({href, icon, icon_hover, isPng = false}) => {
    const [hover, setHover] = useState(false);
    const onMouseEnterHandler = () => setHover(true);
    const onMouseLeaveHandler = () => setHover(false);

    return (
        <a className={style.iconLink}
           href={href}
           onMouseEnter={onMouseEnterHandler}
           onMouseLeave={onMouseLeaveHandler}
        >
            {
                isPng
                    ? <img src={hover ? icon_hover : icon} alt=""/>
                    : hover ? icon_hover : icon
            }
        </a>
    )
};