import { Wrapper } from '@shared/ui/Wrapper'
import classes from './news-slug.module.scss'
import { Breadcrumbs } from '@shared/ui/Breadcrumbs'
import { Section } from '@shared/ui/Section'
export const NewsSlug = () => {
    return <div className={classes.news}>
        <Section 
            name='asd'
            breadcrumbs={ 
                <Breadcrumbs
                className={classes.breadcrumbs}
                items={[{label: 'Новости', isActive: true}]}
                includeHome
                /> }
            >
        </Section>
    </div>
}