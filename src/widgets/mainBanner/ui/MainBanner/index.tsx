import { Wrapper } from "@shared/ui/Wrapper"
import classes from './main-banner.module.scss'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { HandySvg } from "handy-svg";
import clsx from "clsx";
import SliderNav from "@shared/ui/SliderNav/SliderNav";

export const MainBanner = () => {
    return <Wrapper>
        <div className={classes.banner} >
            <Swiper
                className={classes.swiper}
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                    prevEl: "#main-banner-prev",
                    nextEl: "#main-banner-next",
                    enabled: true,
                  }}
                pagination={{ 
                    enabled: true,
                    el: '#bullet-main-banner',
                    bulletClass: 'slider-custom-pagination-bullet',
                    bulletActiveClass: 'slider-custom-pagination-bullet-active',
                    clickable: true 
                }}
                >
                <SwiperSlide>
                    <div className={classes.slide} >
                        <div className={classes.bl_img} >
                            <img 
                                className={classes.img} 
                                src="/assets/images/banner_1.png"
                                width={1390}
                                height={620}
                                />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.slide} >
                        <div className={classes.bl_img} >
                            <img 
                                className={classes.img} 
                                src="/assets/images/banner_1.png"
                                width={1390}
                                height={620}
                                />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.slide} >
                        <div className={classes.bl_img} >
                            <img 
                                className={classes.img} 
                                src="/assets/images/banner_1.png"
                                width={1390}
                                height={620}
                                />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.slide} >
                        <div className={classes.bl_img} >
                            <img 
                                className={classes.img} 
                                src="/assets/images/banner_1.png"
                                width={1390}
                                height={620}
                                />
                        </div>
                    </div>
                </SwiperSlide>
                
        </Swiper>
            <div className={classes.bottom} >
                <SliderNav 
                prevId="main-banner-prev"
                nextId="main-banner-next"
                theme='light'
                />
                <div id={'bullet-main-banner'}  
                    className={clsx(
                    "slider-custom-pagination",
                    "slider-custom-pagination-light",
                    classes.bullets
                    )} >
                </div>
            </div>
        </div>
    </Wrapper>
}