import { Section } from '@shared/ui/Section'
import classes from './about.module.scss'
import { Breadcrumbs } from '@shared/ui/Breadcrumbs'
import { Gallery, IGallery } from '@shared/ui/Gallery'
import { AboutContent } from '../AboutContent'
import { ProjectsSection } from '@widgets/projects'
import { NewsSection } from '@widgets/news'

const galleryDate: IGallery[] = [
    {
        id: 1,
        img: '/assets/images/gallery_1.png',
    },
    {
        id: 2,
        img: '/assets/images/gallery_1.png',
    },
    {
        id: 3,
        img: '/assets/images/gallery_1.png',
    },
    {
        id: 4,
        img: '/assets/images/gallery_1.png',
    },
]

export const About = () => {
    return <>
    <Section 
        name={<><span>Asian Holding &nbsp;</span> 
                – это динамичная и инновационная компания, специализирующаяся на строительстве
                новостроек высокого качества
            </>} 
        buttonMore={
                <p>
                    Asian Holding гордится своими достижениями и стремится к постоянному
                    совершенствованию. Наша цель – создавать пространства, которые вдохновляют, 
                    содействуют развитию, и оставляют непередаваемое впечатление.
                </p>}
        breadcrumbs={
            <Breadcrumbs
                className={classes.breadcrumbs}
                items={[{label: 'О компании', isActive: true}]}
                includeHome
          />
        }
        headerProps={{className: classes.header}}
        buttonMoreProps={{className: classes.bl_subtitle}}
        nameProps={{className: classes.bl_title}}
        >
            <Gallery
                className={classes.gallery}
                images={galleryDate}
                />
    </Section>
    <AboutContent />
    <ProjectsSection />
    <NewsSection />
    </>
}