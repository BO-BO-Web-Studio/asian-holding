import { Wrapper } from '@shared/ui/Wrapper'
import classes from './news-slug.module.scss'
import { Breadcrumbs } from '@shared/ui/Breadcrumbs'
import { Section } from '@shared/ui/Section'
import Image from 'next/image'
import { Date } from '@shared/ui/Date'
import { NewsData } from '@widgets/news/const/newsData'
import { NewsCard } from '../NewsCard'
import { useWindowSize } from '@uidotdev/usehooks'
export const NewsSlug = () => {

    const size = useWindowSize()

    let amountItems = size.width && size.width > 768 ? 3 : 4 
    return <div className={classes.news}>
        <Section 
            className={classes.section}
            name='Выбранный нами инновационный путь определил дальнейшее развитие'
            mainTitle
            breadcrumbs={ 
                <Breadcrumbs
                className={classes.breadcrumbs}
                items={[
                    {label: 'Новости', link: '/news'},
                    {label: 'Подробнее', isActive: true}
                ]}
                includeHome
                /> }
            >
                <div className={classes.bl_img} >
                    <Image 
                        src={'/assets/images/news_1.png'}
                        width={1392}
                        height={620}
                        alt='news'
                        />
                </div>
        </Section>
        <Wrapper>
            <div className={classes.body} >
                <div className={classes.bl_text} >
                    <p>
                        Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. 
                    </p>
                    <p>
                        Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни. Мы стремимся создавать объекты, которые не только визуально привлекательны, но и обеспечивают комфорт и удобство для их будущих обитателей. Наши проекты разрабатываются с учетом современных потребностей и стандартов жизни.
                    </p>
                </div>
                <Date date='22 декабря 2023' />
            </div>

            <div className={classes.items} >
                {NewsData.slice(0, amountItems).map((item) => <NewsCard key={item.id} card={item} />)}
            </div>
        </Wrapper>
    </div>
}