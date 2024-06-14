import { NewsSection } from "@widgets/news"
import { ProjectsSection } from "../ProjectsSection"
import classes from './projects.module.scss'
import { Breadcrumbs } from "@shared/ui/Breadcrumbs"
import { Wrapper } from "@shared/ui/Wrapper"

export const Projects = () => {
    return <div className={classes.projects}>
    <Wrapper>
        <Breadcrumbs
            className={classes.breadcrumbs}
            items={[{label: 'Проекты', isActive: true}]}
            includeHome
            />
    </Wrapper>
    <ProjectsSection />
    <NewsSection/>
    </div>
}