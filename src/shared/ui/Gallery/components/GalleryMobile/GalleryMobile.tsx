import classes from './GalleryMobile.module.scss'
import { GalleryProps } from '@ui/Gallery/components/Gallery/Gallery'
import { IGallery } from '@ui/Gallery'
import { Swiper, SwiperSlide } from 'swiper/react'
import GalleryMobileSlider from '@ui/Gallery/components/GalleryMobileSlider/GalleryMobileSlider'
import Wrapper from '@ui/Wrapper/Wrapper'
import { HandySvg } from 'handy-svg'
import GalleryModal from '@ui/GalleryModal'
import { useState } from 'react'
import clsx from 'clsx'

interface GalleryMobileProps extends GalleryProps {
	activeId: number | null
	onClick: (id: number) => void
	image: IGallery
}

function GalleryMobile({
	activeId,
	onClick,
	images,
	address,
	image,
	name,
	views,
	buttons
}: GalleryMobileProps) {
	const [open, setOpen] = useState(false)
	const [addressOpen, setAddressOpen] = useState(false)
	const [initialSlide, setInitialSlide] = useState<number | null>(null)

	return (
		<Wrapper className={classes.wrapper} >
			<GalleryModal
				open={open}
				pictures={images.map(({ url, id }) => ({ id, image: url }))}
				close={() => setOpen(false)}
				activeId={initialSlide ?? undefined}
			/>
			<div className={classes.GalleryMobile}>
				{/* <img
					onClick={() => {
						setOpen(true)
						setInitialSlide(0)
					}}
					className={classes.Image}
					src={image.url}
					alt={image.title}
					width={328}
					height={200}
				/> */}
				<GalleryMobileSlider
					onClick={(id) => {
						setOpen(true)
						setInitialSlide(images.findIndex((image) => image.id === id))
					}}
					images={images}
					
				/>
			</div>
			<div className={classes.Info}>
				<h1 className={classes.Title}>{name}</h1>
				<div className={classes.buttons_wrapper} >
					<div className={classes.buttons}>
						<div 
						className={clsx(
							classes.address_button,
							addressOpen && classes.open
						)} 
						onClick={() => setAddressOpen(!addressOpen)}
						 >
							<HandySvg
								src="/assets/icons/map-pin-bold.svg"
								width={16}
								height={16}
							/>
							<p className={classes.Address}>
								{address}
							</p>
						</div>
						<div className={classes.views_button} >
							<HandySvg
								src="/assets/icons/views.svg"
								width={16}
								height={16}
							/>
							<p className={classes.views}>
								{views}
							</p>
						</div>

						{buttons}
					</div>
				</div>
			</div>
		</Wrapper>
	)
}

export default GalleryMobile