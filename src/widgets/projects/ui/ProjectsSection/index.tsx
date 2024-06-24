import { Section } from '@shared/ui/Section'
import classes from './projects-section.module.scss'
import { ProjectCard } from '../ProjectCard'
import { useWindowSize } from '@uidotdev/usehooks'
import { ProjectsMobile } from '../ProjectsMobile'
import { ButtonMore } from '@shared/ui/ButtonMore'
import { IProjectCard } from '@widgets/projects/model/IProjectCard'
import useTranslation from 'next-translate/useTranslation'

interface Props {
    residences?: IProjectCard[]
}
export const ProjectsSection = ({residences}: Props) => {
    const size = useWindowSize();
    const { t } = useTranslation('common')
    if(!residences) {
        return null
    }
    return <Section 
        name={t('ourProjects')}
        buttonMore={<ButtonMore name={t('viewAllProjects')} link='/projects' />}
        >
        {size.width && size.width > 768 ?  <div className={classes.items} >
            {residences.map((item) => <div key={item.id}>
                <div className={classes.item} >
                    <ProjectCard item={item} />
                </div>
            </div>)}
        </div> : <ProjectsMobile items={residences} /> }
    </Section>
}