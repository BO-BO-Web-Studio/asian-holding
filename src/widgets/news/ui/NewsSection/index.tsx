import { Section } from '@shared/ui/Section'
import classes from './news-section.module.scss'
import { NewsData } from '@widgets/news/const/newsData'
import { NewsMiniCard } from '../NewsMiniCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ButtonMore } from '@shared/ui/ButtonMore'
export const NewsSection = () => {
    return <Section 
        name='Новости'
        buttonMore={
            <ButtonMore name='Смотреть все новости' link='/news' />
        }
        lastSection
        >
        <Swiper
            className={classes.Swiper}
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
                1360: {
                    spaceBetween: 48,
                    slidesPerView: 4
                },
                1024: {
                    spaceBetween: 24,
                    slidesPerView: 3
                },
                600: {
                    spaceBetween: 24,
                    slidesPerView: 2
                },
            }}
				>
					{NewsData.map((item) => (
						<SwiperSlide
							key={item.id}
							className={classes.Slide}
						>
                            <NewsMiniCard item={item}/>
						</SwiperSlide>
					))}
				</Swiper>
    </Section>
}