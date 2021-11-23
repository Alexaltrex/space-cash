import React, {FC} from 'react';
import svgSprite from '../../assets/svg/icons.symbol.svg'

interface ISvgIcon {
    icon: string
    className?: string
}

export const SvgIcon:FC<ISvgIcon> = ({className, icon}) => (
    <svg className={`icon icon-${icon} ${className ? className : ''}`}>
        <use xlinkHref={`${svgSprite}#${icon}`} />
    </svg>
);
