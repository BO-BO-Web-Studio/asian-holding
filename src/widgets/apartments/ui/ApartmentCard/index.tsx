import { IApartment } from '@widgets/apartments/model/Apartment'
import classes from './apartment-card.module.scss'
import { Button } from '@shared/ui/Button'
import { Modal } from '@shared/ui/Modal'
import { useState } from 'react'
import { Application } from '../Application'
import Image from 'next/image'
interface Props {
    apartment: IApartment
}
export const ApartmentCard = ({apartment}: Props) => {
    const [isOpenModal, setOpenModal] = useState(false)
    const setModal = () => {
        close()
        setOpenModal(!isOpenModal)
    }
    return <div className={classes.card}>
        <div className={classes.top}>
           <div className={classes.bl_img} >
            <Image 
                className={classes.img}
                src={apartment.img}
                width={313}
                height={200}
                alt={apartment.name}
                />
           </div>
        </div>
        <div className={classes.content} >
            <div className={classes.body} >
                <h3 className={classes.title}>
                    {apartment.name}
                </h3>
                <ul className={classes.items}>
                    <li className={classes.item}>
                        <p className={classes.span_1} >
                            Общая площадь
                        </p>
                        <p className={classes.span_2} >
                            {apartment.square}
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
                            {apartment.block}
                        </p>
                    </li>
                </ul>
                <Button 
                    className={classes.button}
                    fullWidth
                    onClick={setModal}
                    >
                    Оставить заявку
                </Button>
            </div>
        </div>
        <Modal
            isOpen={isOpenModal}
            close={setModal}
            isShowCloseButton={true}
            mainClassName={classes.modal_main}
            contentClassName={classes.modal_content}
          >
            <Application 
                apartment={apartment} 
                close={setModal}
                />
          </Modal>
    </div>
}