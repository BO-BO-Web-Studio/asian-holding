import Image from 'next/image'
import classes from './project-info.module.scss'
import { HandySvg } from 'handy-svg'
import { Button } from '@shared/ui/Button'

export const ProjectInfo = () => {
    return <div className={classes.wrapper}>
        <div className={classes.body} >
            <div className={classes.bl_img} >
                <Image 
                    src='/assets/images/company_1.png'
                    width={361}
                    height={153}
                    alt='logo_company'
                />
            </div>
            <ul className={classes.items} >
                <li className={classes.item} >
                    <HandySvg 
                        src='/assets/icons/phone_2.svg' 
                        width={20}
                        height={20}
                        alt='logo_company'
                        />
                        <p>+992 900 000 00 00</p>
                </li>
                <li className={classes.item} >
                    <HandySvg 
                        src='/assets/icons/location.svg' 
                        width={20}
                        height={20}
                        alt='logo_company'
                        />
                    <p>Ул.Испечак 12</p>
                </li>
                <li className={classes.item} >
                    <HandySvg 
                        src='/assets/icons/calendar.svg' 
                        width={20}
                        height={20}
                        alt='logo_company'
                        />
                    <p>Сдача квартир I квартал 2024</p>
                </li>
            </ul>
            <Button className={classes.button} fullWidth >
                Выбрать квартиру
            </Button>
        </div>
    </div>
}