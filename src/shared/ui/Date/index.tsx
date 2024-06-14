import clsx from 'clsx'
import classes from './date.module.scss'
interface Props {
    date: string 
    className?: string 
}
export const Date = ({date, className}: Props) => {
    return  <p className={clsx(classes.date, className)} >
        {date}
    </p>
}