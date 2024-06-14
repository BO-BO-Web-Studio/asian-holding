import { Wrapper } from '@shared/ui/Wrapper'
import classes from './news.module.scss'
import { Breadcrumbs } from '@shared/ui/Breadcrumbs'
import { Section } from '@shared/ui/Section'
import { NewsData } from '@widgets/news/const/newsData'
import { NewsCard } from '../NewsCard'
export const News = () => {
    return <div className={classes.news}>
            <Wrapper className={classes.wrapper} >
                <Breadcrumbs
                    className={classes.breadcrumbs}
                    items={[{label: 'Новости', isActive: true}]}
                    includeHome
                    />
            </Wrapper>
            <Section name='Новости' >
                <ul className={classes.items}>
                    {NewsData.map((item) => 
                    <NewsCard 
                        key={item.id} 
                        card={item} 
                        /> )}
                </ul>
            </Section>
        </div>
}