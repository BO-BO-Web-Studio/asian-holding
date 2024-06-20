import { Gallery, IGallery } from '@shared/ui/Gallery'
import classes from './photo-gallery.module.scss'
import Tabs from '@shared/ui/Tabs/Tabs'
import { useState } from 'react'
import { Section } from '@shared/ui/Section'
import { IProjectCard } from '@widgets/projects/model/IProjectCard'

// const galleryDate: IGallery[] = [
//     {
//         id: 1,
//         image: '/assets/images/gallery_1.png',
//     },
//     {
//         id: 2,
//         image: '/assets/images/gallery_1.png',
//     },
//     {
//         id: 3,
//         image: '/assets/images/gallery_1.png',
//     },
//     {
//         id: 4,
//         image: '/assets/images/gallery_1.png',
//     },
// ]

interface Props {
    residences?: IProjectCard[]
}
export const PhotoGallery = ({residences}: Props) => {
    const [activeId, setActiveId] = useState<number>(1)

    console.log(residences)
    // debugger
    if(!residences) {
        return null
    }
    return <div className={classes.asd}>
        <Section name='Фотогалерея наших проектов' > 
            <Tabs 
                headers={residences}
                activeId={activeId}
                selectTab={setActiveId}
                >
                    <Gallery
                        images={residences && residences[activeId-1].gallery_images}
                    />
            </Tabs>
        </Section>
    </div>
}

