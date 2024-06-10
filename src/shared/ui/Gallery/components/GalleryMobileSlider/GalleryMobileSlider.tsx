import classes from './GalleryMobileSlider.module.scss'
import { IGallery } from '../../interfaces/IGallery'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { ReactNode, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';
import { type Swiper as SwiperTypes } from "swiper";



interface GalleryMobileSliderProps {
	onClick: (id: number) => void
	images: IGallery[]
	buttonChildren?: ReactNode
}

function GalleryMobileSlider({ images, onClick, buttonChildren }: GalleryMobileSliderProps) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [swiperInstance, setSwiperInstance] = useState<SwiperTypes | null>(null);

	return (
		<div className={classes.body}>
			<Swiper
				spaceBetween={15}
				slidesPerView={1}
				pagination={{
					clickable: true,
				}}
				thumbs={{ swiper: swiperInstance }}
				modules={[Navigation, FreeMode, Thumbs, Pagination]}
				className={classes.mySwiper2}
			>
				{images.map(({ id, url, title }) => (
					<SwiperSlide
						key={id}
						className={classes.Item_main_slide}
					>
						<div className={classes.Item_main}>
							<img
								className={classes.Image}
								onClick={(event) => {
									onClick(id)
									const target: any = event.currentTarget
									target.scrollIntoView({
										behavior: 'smooth',
										block: 'nearest'
									})
								}}
								src={url}
								alt={title}
								width={116}
								height={116}
							/>
							{buttonChildren}
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default GalleryMobileSlider