import { INews } from '@widgets/news/model/News'
import classes from './news-mini-card.module.scss'
import { HandySvg } from 'handy-svg'
import Link from 'next/link'
import { Date } from '@shared/ui/Date'

interface Props {
    item: INews
}

export const NewsMiniCard = ({item}: Props) => {
    return <Link href={`/news/${item.id}`} className={classes.card} >
        <div className={classes.body} >
            <div className={classes.bl_title} >
                <p className={classes.title}>{item.name}</p>
            </div>
            <div className={classes.bottom} >
                <Date date={item.date} />
            </div>
        </div>
    </Link>
}