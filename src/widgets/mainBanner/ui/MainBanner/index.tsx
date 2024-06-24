import { Wrapper } from "@shared/ui/Wrapper"
import classes from './main-banner.module.scss'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import clsx from "clsx";
import SliderNav from "@shared/ui/SliderNav/SliderNav";
import { Button } from "@shared/ui/Button";
import Image from "next/image";
import { UnderBanner } from "../UnderBanner";
import { IMainSlide } from "@widgets/mainBanner/model/MainBanner";
import useTranslation from "next-translate/useTranslation";
import { useApplicationStore } from "@widgets/application/model/applicationStore";

interface Props {
    banners?: IMainSlide[]
}
export const MainBanner = ({banners}: Props) => {

    const { t } = useTranslation('common')
    const { toggle } = useApplicationStore(state => (state))
    if(!banners) {
        return null
    }
    return <div className={classes.main_banner}>
            <Wrapper>
                <div className={classes.banner} >
                    <Swiper
                        className={classes.swiper}
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
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
                            {banners.map((item) => 
                            <SwiperSlide key={item.id}>
                                <div className={classes.slide} >
                                    <div className={classes.bl_img} >
                                        <Image
                                            className={classes.img} 
                                            src={item.img}
                                            width={1390}
                                            height={620}
                                            alt={'banner'}
                                            />
                                    </div>
                                    <div className={classes.bl_button} >
                                        <Button 
                                            className={classes.button} 
                                            buttonSize='medium' 
                                            fullWidth
                                            onClick={() => toggle()}
                                            >
                                            {t('chooseApartment')}
                                        </Button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            )}
                    </Swiper>
                    <div className={classes.bottom} >
                        <SliderNav 
                        className={classes.nav}
                        prevId="main-banner-prev"
                        nextId="main-banner-next"
                        theme='light'
                        >
                        <div id={'bullet-main-banner'}  
                            className={clsx(
                            "slider-custom-pagination",
                            "slider-custom-pagination-light",
                            classes.bullets
                            )} >
                        </div>
                        </SliderNav>
                    </div>
                </div>
            <UnderBanner />
        </Wrapper>
    </div>
}