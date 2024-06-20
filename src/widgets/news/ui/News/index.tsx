import { Wrapper } from '@shared/ui/Wrapper'
import classes from './news.module.scss'
import { Breadcrumbs } from '@shared/ui/Breadcrumbs'
import { Section } from '@shared/ui/Section'
import { NewsCard } from '../NewsCard'
import { INews } from '@widgets/news/model/News'

interface Props {
    news?: INews[]
}

export const News = ({news}: Props) => {
    

    if(!news) {
        return null
    }

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
                    {news.map((item) => 
                    <NewsCard 
                        key={item.id} 
                        card={item} 
                        /> )}
                </ul>
            </Section>
        </div>
}