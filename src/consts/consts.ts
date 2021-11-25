import clsx from "clsx";
import style from "../components/FirstBlock/firstBlock.module.scss";

export const time = 200;
export const bubble = (className: string, param: boolean) => {
    return clsx({
    [style[className]]: true,
    [style[`${className}_intersected`]]: param,
})
};