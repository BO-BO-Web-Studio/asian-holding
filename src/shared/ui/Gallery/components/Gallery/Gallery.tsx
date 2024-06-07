'use client'
import classes from './Gallery.module.scss'
import { ReactNode, useState } from 'react'
import { getMinId } from '@shared/lib/getMinId'
import Wrapper from '@ui/Wrapper/Wrapper'
import { HandySvg } from 'handy-svg'
import GallerySlider from '@ui/Gallery/components/GallerySlider/GallerySlider'
import { useWindowSize } from 'usehooks-ts'
import GalleryMobile from '@ui/Gallery/components/GalleryMobile/GalleryMobile'
import GalleryModal from '@ui/GalleryModal'
import clsx from 'clsx'
import { useAppDispatch, useAppSelector } from '@/lib/redux-hooks'
import { selectorRealEstateFavorite, setRealEstateFavorites } from '@/modules/favorites/models/favoriteStore'
import { toggleRealEstateFavorite } from '@/modules/favorites/api/toggleFavorite'
import { openAuth } from '@/widgets/AuthBlank/authStore'
import { getFavorites } from '@/modules/favorites/api/getFavorites'
import { Spinner } from '@/ui/Spinner'

export interface GalleryProps {
	images: IGallery[]
	address: string
	views: number
	name: string
	buttons: ReactNode
	id?: number
	favoritesButton?: ReactNode
	showSliderType?: 1 | 2
	type?: 'real-estate' | 'cottage'
}

function Gallery({ images, buttons, name, address, views, type, favoritesButton, showSliderType, id }: GalleryProps) {
	const [activeId, setActiveId] = useState<number | null>(
		getMinId(images.map(({ id }) => id))
	)
	const [initialSlide, setInitialSlide] = useState<number | null>(null)
	const { width } = useWindowSize()
	const [open, setOpen] = useState(false)
		
	if (images.length === 0) return null

	
	const image = images.find(({ id }) => id === activeId)!
	

	if (width < 1024) {
		return (
			<GalleryMobile
				activeId={activeId}
				onClick={setActiveId}
				image={image}
				views={views}
				images={images}
				address={address}
				name={name}
				buttons={buttons}
				id={id}
			/>
		)
	}

	return (
		<div>
			<GalleryModal
				open={open}
				pictures={images.map(({ url, id }) => ({ id, image: url }))}
				close={() => setOpen(false)}
				activeId={initialSlide ?? undefined}
			/>
			<div
				className={classes.Gallery}
				onClick={() => {
					setOpen(true)
					// setActiveId(0)
					// setInitialSlide(0)
				}}
			>
				<img
					className={classes.Image}
					src={images[0].url}
					alt={images[0].title}
					width={915}
					height={540}
				/>
				{favoritesButton}
				{showSliderType == 1 && <div className={classes.button}>
					<p className={classes.button_text}>{images.length} фотографии</p>
				</div>}
				<div
					className={classes.Info}
					onClick={(event) => {
						event.stopPropagation()
					}}
				>
					
					<h1 className={classes.Name}>{name}</h1>
					<div className={classes.views_block}>
						<p className={classes.Address}>
							<HandySvg
								src="/assets/icons/map-pin-bold.svg"
								width={28}
								height={28}
							/>
							{address}
						</p>
						<p className={classes.Address}>
							<HandySvg src="/assets/icons/views.svg" width={24} height={24} />
							{views}
						</p>
					</div>
					{/* <p className={classes.Views}>{views}</p> */}
					{type =='real-estate' && <div
						className={classes.Buttons}
						onClick={(id) => {
							// debugger
							setOpen(true)
							// setActiveId(0)
							// setInitialSlide(images.findIndex((image) => image.id === id))
							// setInitialSlide(333)
							// console.log(activeId)
							// debugger
						}}
					>
						{buttons}
					</div>}
				</div>
				{showSliderType == 2 &&  <GallerySlider
					onClick={(id) => {
						// debugger
						setOpen(true)
						setActiveId(id)
						setInitialSlide(images.findIndex((image) => image.id === id))
						// setInitialSlide(333)
						// console.log(activeId)
						// debugger
					}}
					images={images}
				/>}
			</div>
		</div>
	)
}

export default Gallery
