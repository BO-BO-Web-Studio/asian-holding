import { IApartment } from "@widgets/apartments/model/Apartment"
import classes from './application.module.scss'
import Dropdown from "@shared/ui/Dropdown/Dropdown"
import { useState } from "react"
import { Button } from "@shared/ui/Button"
import Image from "next/image"
import { IResidences } from "@widgets/projects/model/IProjectCard"

interface Props {
    apartment: IResidences
    close(): void
}
const complexData = [
    {
        id: 1,
        name: 'Полная предоплата'
    },
    {
        id: 2,
        name: 'Рассрочка'
    },
    {
        id: 3,
        name: 'Ипотека'
    }
]
export const Application = ({apartment, close}: Props) => {
    const [paymentOptions, setPaymOntoptions] = useState<number[]>([0])
    return <div className={classes.wrapper}> 
        <div className={classes.top} >
            <h3 className={classes.title_mobile}>
                Оставить заявку
            </h3>
        </div>
        <div className={classes.left} >
            <div className={classes.bl_img} >
                <Image 
                    width={500}
                    height={600}
                    src={apartment.image} 
                    alt={apartment.title}
                    />
            </div>
        </div>
        <div className={classes.right} >
            <div className={classes.body} >
                <h2 className={classes.title} >Оставить заявку</h2>
                <Dropdown 
                    className={classes.dropdown}
                    label="Полная предоплата"
                    multiple
                    items={complexData.map(({ name, id }) => ({
                        id, label: name
                    }))}
                    state={paymentOptions}
                    setState={setPaymOntoptions}
                />
                <div className={classes.info} >
                    <h4 className={classes.info_title} >{apartment.title}</h4>
                    <ul className={classes.items}>
                        <li className={classes.item}>
                            <p className={classes.span_1} >
                                Общая площадь
                            </p>
                            <p className={classes.span_2} >
                                {apartment.area}
                            </p>
                        </li>
                        <li className={classes.item}>
                            <p className={classes.span_1} >
                                Цена
                            </p>
                            <p className={classes.span_2} >
                                {apartment.price}
                            </p>
                        </li>
                        <li className={classes.item}>
                            <p className={classes.span_1} >
                                Жилой комплекс
                            </p>
                            <p className={classes.span_2} >
                                {apartment.floor}
                            </p>
                        </li>
                    </ul>
                </div>
                <div className={classes.buttons} >
                    <Button className={classes.button} bg='secondary' buttonSize='medium' fullWidth >
                        Отмена
                    </Button>
                    <Button className={classes.button} buttonSize='medium' fullWidth>
                        Отправить
                    </Button>
                </div>
            </div>
        </div>
    </div>
}