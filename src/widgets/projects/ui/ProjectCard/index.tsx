import { IProjectCard } from '@widgets/projects/model/IProjectCard'
import classes from './project-card.module.scss'
import { HandySvg } from 'handy-svg'
import Image from 'next/image'
import Link from 'next/link'
interface Props {
    item: IProjectCard
}
export const ProjectCard = ({item}: Props) => {
    return <Link href={item.name} className={classes.card}>
        <Image
            className={classes.image}
            src={item.image} 
            width={432}
            height={432}
            alt={item.name}
            />
        <div className={classes.content} >
            <div className={classes.body}>
                <div className={classes.bl_subtitle} >
                    <HandySvg
                        className={classes.svg}
                        width={20}
                        height={20}
                        src='/assets/icons/news.svg' 
                        alt='news'
                        />
                    <p className={classes.subtitle} >
                        {item.title}
                    </p>
                </div>
                <h3 className={classes.title} >
                    {item.name}
                </h3>
                <div className={classes.items} >
                    <div className={classes.item}>
                        <p className={classes.item_text}>{item.class}</p>
                    </div>
                    <div className={classes.item}>
                        <p className={classes.item_text}>{item.apartments} квартир</p>
                    </div>
                </div>
            </div>
        </div>
    </Link>
}