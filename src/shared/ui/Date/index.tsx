import clsx from 'clsx'
import classes from './date.module.scss'
import { HandySvg } from 'handy-svg'
interface Props {
    date: string 
    className?: string 
}
export const Date = ({date, className}: Props) => {
    return  <div className={classes.body}>
        <HandySvg 
            src='/assets/icons/time.svg' 
            width={24}
            height={24}
            alt={'asd'}
        />
        <p className={clsx(classes.date, className)} >
            {date}
        </p>
    </div>
}