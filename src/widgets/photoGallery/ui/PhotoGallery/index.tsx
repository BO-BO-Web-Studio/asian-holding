import { Gallery, IGallery } from '@shared/ui/Gallery'
import classes from './photo-gallery.module.scss'
import Tabs from '@shared/ui/Tabs/Tabs'
import { useState } from 'react'
import { Section } from '@shared/ui/Section'
import { IProjectCard } from '@widgets/projects/model/IProjectCard'

interface Props {
    residences?: IProjectCard[]
}
export const PhotoGallery = ({residences}: Props) => {
    const [activeId, setActiveId] = useState<number>(1)
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
                    {residences[activeId-1] && <Gallery
                        images={residences[activeId-1].gallery_images}
                    />}
            </Tabs>
        </Section>
    </div>
}

