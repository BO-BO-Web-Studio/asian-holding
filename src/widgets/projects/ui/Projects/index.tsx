import { NewsSection } from "@widgets/news"
import { ProjectsSection } from "../ProjectsSection"
import classes from './projects.module.scss'
import { Breadcrumbs } from "@shared/ui/Breadcrumbs"
import { Wrapper } from "@shared/ui/Wrapper"
import { IProjectCard } from "@widgets/projects/model/IProjectCard"
import { INews } from "@widgets/news/model/News"
import useTranslation from "next-translate/useTranslation"

interface Props {
    residences?: IProjectCard[]
    news?: INews[]
}

export const Projects = ({residences, news}: Props) => {
    const { t } = useTranslation('common')

    return <div className={classes.projects}>
    <Wrapper>
        <Breadcrumbs
            className={classes.breadcrumbs}
            items={[{label: (t('projects')), isActive: true}]}
            includeHome
            />
    </Wrapper>
    <ProjectsSection residences={residences} />
    <NewsSection news={news} />
    </div>
}