'use client'
import classes from './Gallery.module.scss'
import { ReactNode, useState } from 'react'
import { getMinId } from '@shared/lib/getMinId'
import { HandySvg } from 'handy-svg'
import GallerySlider from '../GallerySlider/GallerySlider' 
import { useWindowSize } from 'usehooks-ts'
import GalleryMobile from '../GalleryMobile/GalleryMobile' 
import GalleryModal from '@shared/ui/GalleryModal' 
import { IGallery } from '../../interfaces/IGallery'

export interface GalleryProps {
	images: IGallery[]
	buttons?: ReactNode
	id?: number
}

function Gallery({ images, buttons, id }: GalleryProps) {
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
				images={images}
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
				{<GallerySlider
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
	)
}

export default Gallery
