import { Gallery, IGallery } from '@shared/ui/Gallery'
import classes from './photo-gallery.module.scss'
import Tabs from '@shared/ui/Tabs/Tabs'
import { useState } from 'react'
import { Section } from '@shared/ui/Section'

const galleryDate: IGallery[] = [
    {
        id: 1,
        title: 'string',
        url: '/assets/images/gallery_1.png',
        order: null,
        created_at: 'string',
        updated_at: 'string'
    },
    {
        id: 2,
        title: 'string',
        url: '/assets/images/gallery_1.png',
        order: null,
        created_at: 'string',
        updated_at: 'string'
    },
    {
        id: 3,
        title: 'string',
        url: '/assets/images/gallery_1.png',
        order: null,
        created_at: 'string',
        updated_at: 'string'
    },
    {
        id: 4,
        title: 'string',
        url: '/assets/images/gallery_1.png',
        order: null,
        created_at: 'string',
        updated_at: 'string'
    },
]
export const PhotoGallery = () => {
    const [activeId, setActiveId] = useState<number>(1)
    return <div className={classes.asd}>
        <Section name='Фотогалерея наших проектов' > 
            <Tabs 
                headers={galleryDate}
                activeId={activeId}
                selectTab={setActiveId}
                >
                    <Gallery
                    images={galleryDate}
                    />
            </Tabs>
        </Section>
    </div>
}

