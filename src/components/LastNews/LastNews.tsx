import React, {FC, MutableRefObject, useEffect, useRef, useState} from "react";
import style from './lastNews.module.scss';
import partner0 from '../../assets/img/png/partner0.png';
import partner1 from '../../assets/img/png/partner1.png';
import partner2 from '../../assets/img/png/partner2.png';
import partner3 from '../../assets/img/png/partner3.png';
import partner4 from '../../assets/img/png/partner4.png';
import partner5 from '../../assets/img/png/partner5.png';
import clsx from "clsx";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import right_3 from '../../assets/img/png/objects/right_3.png';
import right_1 from '../../assets/img/png/objects/right_1.png';
import coin1 from '../../assets/img/gif/coin1.gif';


import SwiperCore, {Navigation, Pagination} from 'swiper';


import arrow from '../../assets/img/png/arrow_color.png';


import src0 from '../../assets/img/png/slide_0.png';
import src1 from '../../assets/img/png/slide_1.png';
import {SvgIcon} from "../SvgIcon/SvgIcon";
import {NavigationMethods, NavigationOptions} from "swiper/types/components/navigation";
import useIntersectionObserver from "@react-hook/intersection-observer";
import {time} from "../../consts/consts";

interface IPartner {
    src: string
    href: string
}

const partners: IPartner[] = [
    {src: partner0, href: '#'},
    {src: partner1, href: '#'},
    {src: partner2, href: '#'},
    {src: partner3, href: '#'},
    {src: partner4, href: '#'},
    {src: partner5, href: '#'},
];

interface ISlide {
    src: string
    text: string
    href: string
    data: string
}

const slides: ISlide[] = [
    {
        src: src0,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        href: '#',
        data: 'Sep 29 2021',
    },
    {
        src: src1,
        text: 'Lorem ipsum dolor sit amet, consectetur ',
        href: '#',
        data: 'Sep 29 2021',
    },
    {
        src: src0,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing ',
        href: '#',
        data: 'Sep 29 2021',
    },
    {
        src: src0,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        href: '#',
        data: 'Sep 29 2021',
    },
    {
        src: src1,
        text: 'Lorem ipsum dolor sit amet, consectetur ',
        href: '#',
        data: 'Sep 29 2021',
    },
    {
        src: src0,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing ',
        href: '#',
        data: 'Sep 29 2021',
    },
];

export type TNavButtonDirection = 'prev' | 'next'
export type TRefMap = {
    [key in TNavButtonDirection]: MutableRefObject<HTMLButtonElement>
}
SwiperCore.use([Navigation, Pagination]);

export const LastNews: FC = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const refMap: TRefMap = {
        // @ts-ignore
        prev: useRef<HTMLButtonElement>(null),
        // @ts-ignore
        next: useRef<HTMLButtonElement>(null),
    };
    const navigationUpdate = (Swiper: SwiperCore): void => {
        const {navigation, params, realIndex} = Swiper;
        setActiveSlideIndex(realIndex);
        const navigationParams = params.navigation as NavigationOptions;
        const navigationSwiper = navigation as NavigationMethods;
        navigationParams.prevEl = refMap['prev'].current;
        navigationParams.nextEl = refMap['next'].current;
        navigationSwiper.destroy();
        navigationSwiper.init();
        navigationSwiper.update();
    };
    const getButtonRef = (
        direction: TNavButtonDirection,
        slideIndex: number
    ): MutableRefObject<HTMLButtonElement> => {
        // @ts-ignore
        return slideIndex === activeSlideIndex ? refMap[direction] : undefined
    };

    const ref = useRef<HTMLDivElement>(null);
    const {isIntersecting} = useIntersectionObserver(
        ref,
        {
            threshold: 0.3
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
        <section className={style.lastNews} ref={ref}>
            <div className={style.innerWrapper}>

                <h2 className={clsx({
                    [style.title]: true,
                    [style.title_intersected]: intersected,
                })}
                >
                    <span>Latest news </span>
                    <span>from Panther</span>
                </h2>

                <p className={clsx({
                    [style.subtitle]: true,
                    [style.subtitle_intersected]: intersected_1,
                })}
                >
                    PANTHER IN THE NEWS:
                </p>

                <div className={style.partnersWrapper}>

                    <img src={right_3} className={style.right_3}/>

                    <div className={clsx({
                        [style.partners]: true,
                        [style.partners_intersected]: intersected_2,
                    })}
                    >
                        {
                            partners.map(({src, href}, index) => (
                                <a className={style.partner}
                                   href={href}
                                   key={index}
                                >
                                    <img src={src} alt=""/>
                                </a>
                            ))
                        }
                    </div>
                </div>

                <p className={clsx({
                    [style.subtitle2]: true,
                    [style.subtitle2_intersected]: intersected_3,
                })}
                >
                    FROM THE PANTHER BLOG:
                </p>

                <div className={style.swiperWrapper}>

                    <button className={clsx(style.button, style.button_left)}
                            ref={getButtonRef('prev', activeSlideIndex)}
                    >
                        <SvgIcon icon="arrow-up"/>
                    </button>

                    <button className={clsx({
                        [style.button]: true,
                        [style.button_right]: true,
                    })}
                            ref={getButtonRef('next', activeSlideIndex)}
                    >
                        <SvgIcon icon="arrow-up"/>
                    </button>

                    <Swiper className={style.swiper}
                            onBeforeInit={navigationUpdate}
                            onSlideChange={navigationUpdate}
                            pagination={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                1340: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                    >
                        {
                            slides.map(({src, text, data, href}, index) => (
                                <SwiperSlide className={style.slide} key={index}>
                                    <div className={style.innerWrapper}>
                                        <div className={style.top}>
                                            <img src={src} alt=""/>
                                            <p className={style.text}>{text}</p>
                                        </div>
                                        <div className={style.bottom}>
                                            <a href={href}>
                                                <span>Read more</span>
                                                <img src={arrow} alt=""/>
                                            </a>
                                            <p className={style.data}>{data}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>

                <div className={style.buttons}>

                    <img src={right_1} className={style.right_1}/>
                    <img src={coin1} className={style.coin1}/>

                    <button className={style.first}>
                        <span>Media Request</span>
                        <SvgIcon icon="arrow-up"/>
                    </button>

                    <button className={style.second}>
                        <span>Spacecash blog</span>
                        <SvgIcon icon="arrow-up"/>
                    </button>

                </div>


            </div>
        </section>
    )
}