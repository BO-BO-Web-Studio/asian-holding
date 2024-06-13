import { Section } from '@shared/ui/Section'
import classes from './projects-section.module.scss'
import { ProjectsDate } from '@widgets/projects/const/ProjectsDate'
import { ProjectCard } from '../ProjectCard'
import { useWindowSize } from '@uidotdev/usehooks'
import { ProjectsMobile } from '../ProjectsMobile'

export const ProjectsSection = () => {
    const size = useWindowSize();
    
    return <Section name='Наши проекты'>
        {size.width && size.width > 768 ?  <div className={classes.items} >
            {ProjectsDate.map((item) => <>
                <div className={classes.item}>
                    <ProjectCard item={item} />
                </div>
            </>)}
        </div> : <ProjectsMobile items={ProjectsDate} /> }
    </Section>
}