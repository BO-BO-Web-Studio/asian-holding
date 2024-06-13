import Link from 'next/link'
import classes from './footer-top.module.scss'
import { Button } from '@shared/ui/Button'
import { contacts } from '@shared/const/contacts'
import { HandySvg } from 'handy-svg'

export const FooterTop = () => {
    return <div className={classes.footer_top} >
    <div className={classes.list_top} >
        <Link className={classes.link_button} href='#header'>
            <HandySvg 
                className={classes.link_svg}
                src='/assets/icons/arrow-top.svg'  
                width={44}
                height={44}
                alt={'nav top'}
                />
            Наверх
        </Link>
    </div>
    <div className={classes.contacts} >
        <Link href={contacts.link} className={classes.tell}>
            {contacts.phone}
        </Link>
        <Button className={classes.button} variant='outlined' bg='secondary' buttonSize='medium' >
            Обратный звонок
        </Button>
    </div>
</div>
}

