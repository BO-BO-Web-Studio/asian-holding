import { Section } from '@shared/ui/Section'
import classes from './projects-section.module.scss'
import { ProjectCard } from '../ProjectCard'
import { useWindowSize } from '@uidotdev/usehooks'
import { ProjectsMobile } from '../ProjectsMobile'
import { ButtonMore } from '@shared/ui/ButtonMore'
import { IProjectCard } from '@widgets/projects/model/IProjectCard'

interface Props {
    residences?: IProjectCard[]
}
export const ProjectsSection = ({residences}: Props) => {
    const size = useWindowSize();
    
    if(!residences) {
        return null
    }
    return <Section 
        name='Наши проекты'
        buttonMore={<ButtonMore name='Смотреть все проекты' link='/projects' />}
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