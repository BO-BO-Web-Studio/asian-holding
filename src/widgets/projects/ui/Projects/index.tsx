import { NewsSection } from "@widgets/news"
import { ProjectsSection } from "../ProjectsSection"
import classes from './projects.module.scss'
import { Breadcrumbs } from "@shared/ui/Breadcrumbs"
import { Wrapper } from "@shared/ui/Wrapper"
import { IProjectCard } from "@widgets/projects/model/IProjectCard"
import { INews } from "@widgets/news/model/News"

interface Props {
    residences?: IProjectCard[]
    news?: INews[]
}

export const Projects = ({residences, news}: Props) => {
    return <div className={classes.projects}>
    <Wrapper>
        <Breadcrumbs
            className={classes.breadcrumbs}
            items={[{label: 'Проекты', isActive: true}]}
            includeHome
            />
    </Wrapper>
    <ProjectsSection residences={residences} />
    <NewsSection news={news} />
    </div>
}