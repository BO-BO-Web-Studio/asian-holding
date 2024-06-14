import { INews } from '@widgets/news/model/News'
import classes from './news-card.module.scss'
import { Card } from '@shared/ui/Card'
import { Date } from '@shared/ui/Date'
interface Props {
    card: INews
}
export const NewsCard = ({card}: Props) => {
    return <Card name='news' image={card.image} link='/news/asd' >
        <div className={classes.content}>
            <p className={classes.text} >
                {card.name}
            </p>
            <Date className={classes.date} date={card.date} />
        </div>
    </Card>
}