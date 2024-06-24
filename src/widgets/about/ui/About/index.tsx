import { Section } from '@shared/ui/Section'
import classes from './about.module.scss'
import { Breadcrumbs } from '@shared/ui/Breadcrumbs'
import { Gallery, IGallery } from '@shared/ui/Gallery'
import { AboutContent } from '../AboutContent'
import { ProjectsSection } from '@widgets/projects'
import { NewsSection } from '@widgets/news'
import useTranslation from 'next-translate/useTranslation'
import { INews } from '@widgets/news/model/News'
import { IProjectCard } from '@widgets/projects/model/IProjectCard'

interface Props {
    news?: INews[]
    residences?: IProjectCard[]
}
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

export const About = ({news, residences}: Props) => {
    const { t } = useTranslation('aboutCompany')
    return <>
    <Section 
        name={<><span>Asian Holding &nbsp;</span> 
                {t('mainTitle')}
            </>} 
        buttonMore={
                <p>
                    {t('mainText')}
                </p>}
        breadcrumbs={
            <Breadcrumbs
                className={classes.breadcrumbs}
                items={[{label: (t('about')), isActive: true}]}
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
    <ProjectsSection residences={residences} />
    <NewsSection news={news} />
    </>
}