import Link from 'next/link'
import classes from './footer-content.module.scss'
import { HandySvg } from 'handy-svg'
import useTranslation from 'next-translate/useTranslation'

const DataProjects:IItem[] = [
    {
        id: 12,
        name: 'Первый проект',
        link: 'asd'
    },
    {
        id: 2,
        name: 'Второй проект',
        link: 'asd'
    },
    {
        id: 3,
        name: 'Третий проект',
        link: 'asd'
    },
]
const TypeContacts:IItem[] = [
    {
        id: 12,
        name: 'Первый проект',
        link: 'asd'
    },
    {
        id: 2,
        name: 'Второй проект',
        link: 'asd'
    },
    {
        id: 3,
        name: 'Третий проект',
        link: 'asd'
    },
]
const AboutContacts:IItem[] = [
    {
        id: 12,
        name: 'Первый проект',
        link: 'asd'
    },
    {
        id: 2,
        name: 'Второй проект',
        link: 'asd'
    },
    {
        id: 3,
        name: 'Третий проект',
        link: 'asd'
    },
]
const DataContacts:IItem[] = [
    {
        id: 12,
        name: '+992 900 00 00 00',
        link: 'asd'
    },
    {
        id: 2,
        name: 'exaple@gmail.com',
        link: 'asd'
    },
    {
        id: 3,
        name: 'Инстаграм',
        link: 'asd'
    },
]

interface IItem {
    id: number 
    name: string 
    link: string
}

export const FooterContent = () => {
    const { t } = useTranslation('common')

    return <div className={classes.footer} >
    <div className={classes.left} >
        <Link href='/'>
            <HandySvg 
                className={classes.link_svg}
                src='/assets/icons/logo-white.svg'  
                width={153}
                height={129}
                alt={'logo'}
                />
        </Link>
    </div>
    <div className={classes.right} >
        <div className={classes.items} >
            <div className={classes.item}>
                <h3 className={classes.item_title}>{t('projects')}</h3>
                <ul className={classes.links} >
                    {DataProjects.map((item) => 
                    <li className={classes.link_item} key={item.id} >
                        <Link className={classes.link} href={item.link}>
                            {item.name}
                        </Link>
                    </li>)}
                </ul>
            </div>
            <div className={classes.item}>
                <h3 className={classes.item_title}>{t('apartments')}</h3>
                <ul className={classes.links} >
                    {TypeContacts.map((item) => 
                    <li className={classes.link_item} key={item.id} >
                        <Link className={classes.link} href={item.link}>
                            {item.name}
                        </Link>
                    </li>)}
                </ul>
            </div>
            <div className={classes.item}>
                <h3 className={classes.item_title}>{t('aboutCompany')}</h3>
                <ul className={classes.links} >
                    {AboutContacts.map((item) => 
                    <li className={classes.link_item} key={item.id} >
                        <Link className={classes.link} href={item.link}>
                            {item.name}
                        </Link>
                    </li>)}
                </ul>
            </div>
            <div className={classes.item}>
                <h3 className={classes.item_title}>{t('contacts')}</h3>
                <ul className={classes.links} >
                    {DataContacts.map((item) => 
                    <li className={classes.link_item} key={item.id} >
                        <Link className={classes.link} href={item.link}>
                            {item.name}
                        </Link>
                    </li>)}
                </ul>
            </div>
        </div>
    </div>
</div>
}

