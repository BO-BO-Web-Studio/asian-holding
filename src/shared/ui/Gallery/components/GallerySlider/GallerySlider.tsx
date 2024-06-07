'use client'
import classes from './GallerySlider.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination } from 'swiper'
import { HandySvg } from 'handy-svg'
import { IImage } from '@interfaces/IImage'
import { Placemark } from '@pbe/react-yandex-maps';

interface GallerySliderProps {
	images: IImage[]
	onClick: (id: number) => void
}

function GallerySlider({ images, onClick }: GallerySliderProps) {
	// debugger
	return (
		<>
			<div className={classes.GallerySlider}>
				<Swiper
					className={classes.Swiper}
					direction="vertical"
					pagination={{
						enabled: true,
						clickable: true,
						el: '#gallery-pagination',
						bulletClass: classes.Bullet,
						bulletActiveClass: classes.BulletActive
					}}
					navigation={{
						enabled: true,
						nextEl: '#gallery-nav-next',
						prevEl: '#gallery-nav-prev',
					}}
					slidesPerView={3}
					spaceBetween={28}
					modules={[Pagination, Navigation]}
					breakpoints={{
						1360: {
							spaceBetween: 28
						},
						1024: {
							spaceBetween: 20
						}
					}}
				>
					{images.map(({ url, id, title }) => (
						<SwiperSlide
							key={id}
							className={classes.Slide}
						>
							<img
								className={classes.Image}
								onClick={() => onClick(id)}
								src={url}
								alt={title}
								width={128}
								height={128}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div id="gallery-pagination" className={classes.Pagination} />
			<div className={classes.Navigation}>
				<button
					id="gallery-nav-prev"
					className={classes.Prev}
					aria-label="Предыдущий"
				>
					<HandySvg
						src="/assets/icons/chevron-up.svg"
						width={24}
						height={24}
					/>
				</button>
				<button
					id="gallery-nav-next"
					className={classes.Next}
					aria-label="Следующий"
				>
					<HandySvg
						src="/assets/icons/chevron-down.svg"
						width={24}
						height={24}
					/>
				</button>
			</div>
		</>
	)
}

export default GallerySlider